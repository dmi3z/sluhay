import { TypeOfCoefficient } from './../interfaces/type-of-ciefficient.interface';
export const TYPES_OF_COEFFICIENTS: TypeOfCoefficient[] = [
  {
    img: '../../../../../assets/play-1.png',
    name: 'базовый коэффициент «1»',
    description:
      'Если Вы присылайте песню в аудио формате, то в расчётах начисляется - <b>базовый коэффициент \
      «1»</b> за каждую песню в аудио формате. В данном случае видеосопровождение к Вашей песни будет \
      создано редакторами Sluhay.by',
    orientation: 'left',
  },
  {
    img: '../../../../../assets/play-2.png',
    name: 'базовый коэффициент «2»',
    description:
      'Если Вы присылайте песню с видео рядом в формате клип, лирик видео, live видео, любой\
       тип видео анимации (кроме статичной картинки) - то к вашей песни применяется <b>повышающий коэффициент «2»</b>',
    orientation: 'right',
  },
  {
    img: '../../../../../assets/play-3.png',
    name: 'базовый коэффициент «10»',
    description:
      'Если Вы присылайте песню в аудио формате или песню с видео рядом, которую \
      размещаете ЭКСЛЮЗИВНО на ресурсе Sluhay.by. И при этом НЕ размещаете данную \
      композицию на других музыкальных ресурсах (все стриминговые сервисы/ youtube/ и прочие) - \
      то к Вашей песни применяется максимальный <b>повышающий коэффициент «10».<b>',
    orientation: 'left',
  },
];
