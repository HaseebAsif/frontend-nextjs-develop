import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';

import { SEO } from 'components/tools';
import {
  Breadcrumbs,
  BreadcrumbsProps,
  Container,
  Grid,
  Loading,
  Image
} from 'components/ui/general';
import { Error } from 'components/ui/router';
import AttributesSection from 'components/ui/webApp/BookInfo/AttributesSection';
import ButtonSection from 'components/ui/webApp/BookInfo/ButtonSection';
import DescriptionSection from 'components/ui/webApp/BookInfo/DescriptionSection';
import HeadlineSection from 'components/ui/webApp/BookInfo/HeadlineSection';
import { MissingBookCover } from 'components/ui/webApp/MissingBookCover';
import { Paths } from 'consts/router';
import { useBreakpoint, useUrlQuery, useUser } from 'hooks';
import { addToast } from 'redux/toast';
import {
  Subject,
  useBookIsbnLazyQuery,
  useSetFavouriteMutation
} from 'types/graphql';
import { OGTypes, StructuredType, TwitterCards } from 'types/seo';

import { texts } from './BookInfo.texts';

import styles from './BookInfo.module.scss';

export interface Attribute {
  label: string;
  content: string | number;
  id: number;
}

export const BookInfo = () => {
  const router = useRouter();
  const { all } = router.query;
  const isbn = all?.[1] || '';
  const intl = useIntl();
  const params = useUrlQuery();
  const previousPage = params.get('previous') || undefined;
  const [fetchBook, { data, loading = true, error }] = useBookIsbnLazyQuery();
  const [setFavourite, { data: favouriteData }] = useSetFavouriteMutation();
  const { min } = useBreakpoint();
  const { loggedIn } = useUser();
  const dispatch = useDispatch();
  const [attributes, setAttributes] = useState<Attribute[]>([
    {
      label: intl.formatMessage(texts.authorLabel),
      content: data?.bookIsbn?.authors
        .map((author) => author.name)
        .join(', ') as string,
      id: 0
    }
  ]);

  const cutDescriptionString = useCallback(
    (str: string, maxLength: number, separator = ' ') => {
      if (str.length <= maxLength) return str;
      return str.substring(0, str.lastIndexOf(separator, maxLength));
    },
    []
  );

  useEffect(() => {
    fetchBook({
      variables: {
        isbn
      }
    });
  }, [fetchBook, isbn]);

  useEffect(() => {
    if (favouriteData && !favouriteData?.setFavourite.favourite) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.favouriteRemoved),
          type: 'light'
        })
      );
    }
    if (favouriteData && favouriteData?.setFavourite.favourite) {
      dispatch(
        addToast({
          message: intl.formatMessage(texts.favouriteAdded),
          type: 'light'
        })
      );
    }
  }, [favouriteData, dispatch, intl]);

  useEffect(() => {
    if (data) {
      const tempAttributes = [];

      if (data.bookIsbn?.numberOfPages) {
        tempAttributes.push({
          label: intl.formatMessage(texts.pagesLabel),
          content: data.bookIsbn?.numberOfPages as number,
          id: 1
        });
      }

      if (data.bookIsbn?.language) {
        tempAttributes.push({
          label: intl.formatMessage(texts.languageLabel),
          content: intl.formatMessage(
            (texts as { [lorem: string]: any })[data?.bookIsbn?.language]
          ),
          id: 2
        });
      }

      if (data.bookIsbn?.subjects.length) {
        const getSubjectKey = (subject: Subject) => {
          return Object.entries(Subject).filter(
            ([, value]) => subject === value
          )[0][0];
        };

        const keyList = data.bookIsbn.subjects.map((item) =>
          getSubjectKey(item)
        );

        tempAttributes.push({
          label: intl.formatMessage(texts.subjectLabel),
          content: keyList
            .map((key) =>
              intl.formatMessage((texts as { [lorem: string]: any })[key])
            )
            .join(', ') as string,
          id: 3
        });
      }

      if (data.bookIsbn?.categories.length) {
        tempAttributes.push({
          label: intl.formatMessage(texts.categoriesLabel),
          content: data?.bookIsbn?.categories?.join(', ') as string,
          id: 4
        });
      }

      if (data.bookIsbn?.releaseYear) {
        tempAttributes.push({
          label: intl.formatMessage(texts.yearLabel),
          content: data?.bookIsbn?.releaseYear as number,
          id: 5
        });
      }

      if (data?.bookIsbn?.format) {
        tempAttributes.push({
          label: intl.formatMessage(texts.formatLabel),
          content: data?.bookIsbn?.format as string,
          id: 6
        });
      }

      if (data.bookIsbn?.publisher) {
        tempAttributes.push({
          label: intl.formatMessage(texts.publisherLabel),
          content: data?.bookIsbn?.publisher.name as string,
          id: 7
        });
      }

      if (data.bookIsbn?.version) {
        tempAttributes.push({
          label: intl.formatMessage(texts.editionLabel),
          content: data?.bookIsbn?.version as string,
          id: 8
        });
      }

      if (data.bookIsbn?.isbn) {
        tempAttributes.push({
          label: intl.formatMessage(texts.isbnLabel),
          content: data?.bookIsbn?.isbn as string,
          id: 9
        });
      }

      setAttributes(tempAttributes);
    }
  }, [data, intl]);

  const previousLabel: string = useMemo(() => {
    switch (previousPage) {
      case '/search':
        return intl.formatMessage(texts.searchLabel);
      case '/favourites':
        return intl.formatMessage(texts.favouriteLabel);
      default:
        return intl.formatMessage(texts.startLabel);
    }
  }, [previousPage, intl]);

  const crumbs: BreadcrumbsProps['crumbs'] = useMemo(
    () => [
      {
        label: previousLabel,
        to: previousPage || Paths.HOME
      },
      {
        label: data?.bookIsbn?.title
      }
    ],
    [previousLabel, previousPage, data]
  );

  const toggleFavourite = async () => {
    if (!loggedIn)
      return router.push(
        Paths.REGISTER(
          encodeURIComponent(Paths.BOOK_INFO(data?.bookIsbn?.title, isbn))
        )
      );

    await setFavourite({
      variables: {
        id: data?.bookIsbn?.id as string,
        favourite: !(data?.bookIsbn?.tracking?.favourite as boolean)
      }
    });
  };

  /*
  usePrerenderReady(!!data?.bookIsbn);
*/

  return (
    <>
      <SEO
        title={data?.bookIsbn?.title}
        canonical={window.location.href.split('?')[0]}
        twitter={{
          twitterTitle: data?.bookIsbn?.title || '',
          image: data?.bookIsbn?.image?.uri || '',
          card: TwitterCards.summaryLargeImage,
          altImage: data?.bookIsbn?.title,
          twitterDescription: data?.bookIsbn?.description
            ? cutDescriptionString(data.bookIsbn.description, 170)
            : ''
        }}
        og={{
          ogTitle: data?.bookIsbn?.title || '',
          image: data?.bookIsbn?.image?.uri || '',
          altImage: data?.bookIsbn?.title,
          type: OGTypes.book,
          contentType: data?.bookIsbn?.image?.contentType || '',
          ogDescription: data?.bookIsbn?.description
            ? cutDescriptionString(data.bookIsbn.description, 170)
            : '',
          url: window.location.href.split('?')[0]
        }}
        structured={{
          type: StructuredType.Product,
          name: data?.bookIsbn?.title || '',
          url: window.location.href.split('?')[0],
          description: data?.bookIsbn?.description
            ? cutDescriptionString(data.bookIsbn.description, 170)
            : '',
          image: data?.bookIsbn?.image?.uri || '',
          isbn: data?.bookIsbn?.isbn,
          productID: `isbn:${data?.bookIsbn?.isbn}`,
          brand: {
            name: data?.bookIsbn?.publisher.name || ''
          },
          offers: {
            price: 199,
            lowPrice: 199,
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            priceCurrency: 'SEK'
          },
          genre: attributes.filter((att) => att.id === 3)?.[0]?.content,
          publishedAt: attributes.filter((att) => att.id === 5)?.[0]?.content,
          language: attributes.filter((att) => att.id === 2)?.[0]?.content,
          author: data?.bookIsbn?.authors
            .map((author) => author.name)
            .join(', ')
        }}
      >
        <meta
          name="description"
          content={
            data?.bookIsbn?.description
              ? cutDescriptionString(data.bookIsbn.description, 170)
              : ''
          }
        />
        <meta property="book:isbn" content={data?.bookIsbn?.isbn || ''} />
        <meta
          property="book:author"
          content={
            data?.bookIsbn?.authors
              ? data.bookIsbn.authors.map((author) => author.name).join(', ')
              : ''
          }
        />
        <meta
          property="book:release_date"
          content={data?.bookIsbn?.releaseYear?.toString() || ''}
        />
        {data?.bookIsbn &&
          data.bookIsbn.subjects.map((subject) => {
            // Translate subjects
            const key = Object.entries(Subject).filter(
              ([, subjectEnum]) => subject === subjectEnum
            )[0][0];
            const translation = intl.formatMessage(
              (texts as { [lorem: string]: any })[key]
            );
            return (
              <meta key={subject} property="book-tag" content={translation} />
            );
          })}
      </SEO>
      {error && <Error />}
      {!error && (
        <Container className={styles.container}>
          <div className={styles.breadCrumb}>
            <Breadcrumbs crumbs={crumbs} />
          </div>
          {loading && <Loading />}
          {!min('sm') && !loading && (
            <div>
              <div className={styles.imageBox}>
                {data?.bookIsbn?.image?.uri ? (
                  <Image
                    src={data?.bookIsbn?.image?.uri || ''}
                    alt={`${data.bookIsbn.title} ${data.bookIsbn.isbn}`}
                    fit="contain"
                    cover
                    className={styles.image}
                    height={400}
                    width={280}
                  />
                ) : (
                  <div className={styles.missingImage}>
                    <MissingBookCover />
                  </div>
                )}
              </div>
              <HeadlineSection
                title={data?.bookIsbn?.title}
                author={data?.bookIsbn?.authors
                  .map((author) => author.name)
                  .join(', ')}
              />
              <ButtonSection
                id={data?.bookIsbn?.id}
                toggleFavorite={toggleFavourite}
                isFavourite={data?.bookIsbn?.tracking?.favourite as boolean}
              />
              <DescriptionSection description={data?.bookIsbn?.description} />
              <div className={styles.attributesBox}>
                <AttributesSection attributes={attributes} />
              </div>
            </div>
          )}
          {min('sm') && !loading && (
            <Grid gutter={{ left: 3 }}>
              <Grid.Item width={4} className={styles.box}>
                <div className={styles.imageBox}>
                  {data?.bookIsbn?.image?.uri ? (
                    <Image
                      src={data?.bookIsbn?.image?.uri || ''}
                      alt={`${data.bookIsbn.title} ${data.bookIsbn.isbn}` || ''}
                      fit="cover"
                      cover
                      className={styles.image}
                      height={400}
                      width={280}
                    />
                  ) : (
                    <MissingBookCover />
                  )}
                </div>
                <ButtonSection
                  id={data?.bookIsbn?.id}
                  toggleFavorite={toggleFavourite}
                  isFavourite={data?.bookIsbn?.tracking?.favourite as boolean}
                />
              </Grid.Item>
              <Grid.Item width={8}>
                <HeadlineSection
                  title={data?.bookIsbn?.title}
                  author={data?.bookIsbn?.authors
                    .map((author) => author.name)
                    .join(', ')}
                />
                <DescriptionSection description={data?.bookIsbn?.description} />
              </Grid.Item>
              <Grid.Item width={{ sm: 12, lg: 8 }} offset={{ lg: 4 }}>
                <div className={styles.attributesBox}>
                  <AttributesSection
                    attributes={attributes.slice(
                      0,
                      (attributes.length || 2) / 2
                    )}
                  />
                  <AttributesSection
                    attributes={attributes.slice((attributes.length || 2) / 2)}
                  />
                </div>
              </Grid.Item>
            </Grid>
          )}
        </Container>
      )}
    </>
  );
};
