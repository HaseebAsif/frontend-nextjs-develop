import React from 'react';

import { IconName } from '@fortawesome/fontawesome-svg-core';
import classNames from 'classnames';
import Link from 'next/link';

import { Icon } from 'components/ui/general';
import { Paths } from 'consts/router';
import { Subject } from 'types/graphql';

import styles from './SubjectCard.module.scss';

interface SubjectCardProps {
  subjectEnum: Subject;
  text: string;
  color?: 'light';
}

const SubjectIcons: Record<Subject, IconName> = {
  computer_science_and_engineering: 'laptop-code',
  veterinary_medicine_and_nursing: 'cat-space',
  business_administration_and_economics: 'chart-line',
  journalism_communication_and_information: 'typewriter',
  health_and_medical_care: 'briefcase-medical',
  law_and_legal_studies: 'gavel',
  arts_design_and_media: 'palette',
  agriculture_horticulture_forestry_and_fishery: 'wheat',
  natural_science: 'lungs',
  social_science_and_behavioural_science: 'users',
  social_work_and_welfare: 'hand-holding-medical',
  languages: 'language',
  technology: 'microchip',
  other: 'books',
  humanities: 'head-side-brain',
  education_educational_sciences_didactics: 'school',
  religious_studies: 'praying-hands',
  mathematics: 'abacus',
  materials_construction_and_manufactoring: 'drafting-compass'
} as const;

export const SubjectCard = ({
  subjectEnum,
  text,
  color = 'light'
}: SubjectCardProps) => {
  return (
    <Link href={Paths.BOOKS({ subject: subjectEnum })}>
      <div
        className={classNames(styles.root, {
          [styles[`${color}Color`]]: color
        })}
      >
        <div className={styles.icon}>
          <Icon name={SubjectIcons[subjectEnum]} />
        </div>
        <span>{text}</span>
      </div>
    </Link>
  );
};
