export type Align = 'start' | 'center' | 'end' | 'top' | 'middle' | 'bottom';

export type Spacings =
  | 0
  | 0.5
  | 1
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 4.5
  | 5
  | 5.5
  | 6
  | 6.5
  | 7
  | 7.5
  | 8
  | 8.5
  | 9
  | 9.5
  | 10;

export type Fractions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type FractionsCollection =
  | Fractions
  | {
      root?: Fractions;
      xs?: Fractions;
      sm?: Fractions;
      md?: Fractions;
      lg?: Fractions;
      navbar?: Fractions;
    };

export type GutterCollection =
  | Spacings
  | {
      root?: Spacings;
      xs?: Spacings;
      sm?: Spacings;
      md?: Spacings;
      lg?: Spacings;
      navbar?: Spacings;
    };

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'navbar';
