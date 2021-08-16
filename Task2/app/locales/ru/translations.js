export default {
  errors: {
    description: "Это поле",
    inclusion: "{{description}} должно соответствовать цифре от 1 до 5",
    exclusion: "{{description}} зарезервировано",
    invalid: "{{description}} не действительно",
    confirmation: "{{description}} не совпадает с {{on}}",
    accepted: "{{description}} должно быть приемлимым",
    empty: "{{description}} не может быть пустым",
    blank: "{{description}} должно быть заполнено",
    present: "{{description}} должно быть пустым",
    collection: "{{description}} must be a collection",
    singular: "{{description}} can't be a collection",
    tooLong: "{{description}} слишком длинное (максимум можно {{max}} символов)",
    tooShort: "{{description}} слишком короткое (минимум необходимо {{min}} символов)",
    before: "{{description}} должно быть перед {{before}}",
    after: "{{description}} должно быть после {{after}}",
    wrongDateFormat: "{{description}} должно быть в формате {{format}}",
    wrongLength: "{{description}} не правильной длины (должно быть {{is}} символов)",
    notANumber: "{{description}} должно быть числом",
    notAnInteger: "{{description}} должно быть цифрой",
    greaterThan: "{{description}} должно быть больше чем {{gt}}",
    greaterThanOrEqualTo: "{{description}} должно быть больше чем или равен {{gte}}",
    equalTo: "{{description}} должно быть равно {{is}}",
    lessThan: "{{description}} должно быть меньше {{lt}}",
    lessThanOrEqualTo: "{{description}} должно быть меньше или равно {{lte}}",
    otherThan: "{{description}} должно отличаться от {{value}}",
    odd: "{{description}} должно быть нечетным",
    even: "{{description}} должно быть четным",
    positive: "{{description}} должно быть положительным",
    date: "{{description}} должно быть правильной датой",
    onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
    onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
    email: "{{description}} должно иметь корректный формат e-mail адреса",
    phone: "{{description}} должно быть правильным номером телефона",
    url: "{{description}} должно быть правильной ссылкой",
    password: 'пароль',
    passwordDescription: 'Пароль и подтверждение пароля',
    passwordDontMatch: 'не совпадают'
  },

  menu: {
    logo: 'Книжный клуб',
    desktop: 'Рабочий стол',
    meetings: 'Встречи клуба',
    books: 'Книги',
    speakers: 'Спикеры',
    langRu: 'Русский',
    langEn: 'Английский',
    register: 'Регистрация',
    makeReq: 'Оставить заявку',
    toSchedule: 'Запланировать',
    login: 'Войти',
    logout: 'Выйти'
  },

  books: {
    books: 'Книги',
    book: 'Книга',
    addBook: 'Добавить книгу',
    editBook: 'Редактировать книгу',
    title: 'Название',
    author: 'Автор',
    pagesCount: 'Количество страниц',
    coverURL: 'Ссылка на обложку',
    descriURL: 'Ссылка на описание',
    tags: 'Тэги',
    avgBookScore: 'Средняя оценка книги',
    reportsList: 'Список выступлений',
    reportURL: 'Ссылка на выступление',
    placeholder: {
      searchByTag: 'Поиск по тэгам',
      searchAll: 'Поиск по названию, автору, тэгам',
      author: 'ФИО автора',
      title: 'Полное название книги',
      pagesCount: '1 или 2 или 150 и т.д.',
      coverURL: 'Например: https://www.google.jpg',
      descriURL: 'Например: https://www.google.com/',
      tags: 'Введите тэги через запятую, без пробелов',
    }
  },

  speakers: {    
    addSpeaker: 'Добавить Спикера',
    speakers: 'Спикеры',
    speaker: 'Спикер',
    editSpeaker: 'Редактировать спикера',
    name: 'Имя',
    surname: 'Фамилия',
    patronymic: 'Отчество',

    placeholder: {
      searchByCreds: 'Поиск по ФИО',
      name: 'Введите Имя',
      surname: 'Введите Фамилию',
      patronymic: 'Введите Отчество',
    }
  },

  reports: {
    reportsList: 'Список выступлений',
    reportURL: 'Ссылка на выступление',
    reportInfo: 'Информация о докладе',
    reportEdit: 'Редактировать выступление',
    editReportFor: 'Редактирование Доклада за',
    addReportFor: 'Добавление Доклада за',
    addReport: 'Добавить Доклад',
    reportFor: 'Доклад за',
    bookScore: 'Оценка книги',
    outOf5: 'из 5',
    presentationURL: 'Ссылка на презентацию',
    videoURL: 'Ссылка на видео',
    review: 'Отзыв',
    speaker: 'Докладчик',
    forBook: 'По книге',
    chooseBook: 'Выберите книгу',
    chooseSpeaker: 'Выберите спикера',
    
    placeholder: {
      bookScore: 'Оцените книгу (от 1 до 5)',
      presentationURL: 'Н-р: http://www.presentation.com',
      videoURL: 'Н-р: http://www.video.com',
      review: 'Напишите отзыв о книге',

    }
  },

  meetings: {
    addMeeting: 'Добавить встречу',
    meetingDate: 'Дата встречи',
    editMeetingFor: 'Редактирование встречи за',
    editMeetingDateOrAddReport: 'Редактировать дату встречи или добавить доклад',
    deleteMeeting: 'Удалить встречу',
    usefulLinks: 'Полезные ссылки',
    watchReportRecord: 'Посмотреть запись доклада',
    dlPresentation: 'Скачать презентацию',
    clubMeetings: 'Встречи Клуба',
    chooseDate: "Выберите Дату",

    placeholder: {
      date: "Дата...",
    },    
  },
  
  register: {
    username: 'Имя пользователя',
    email: 'Электронная почта',
    password: 'Пароль',
    passwordConfirm: 'Подтвердите Пароль',
  },

  buttons:{
    back: 'Вернуться',
    edit: 'Редактировать',
    save: 'Сохранить',
    delete: 'Удалить',
    cancel: 'Отмена'
  }
};
