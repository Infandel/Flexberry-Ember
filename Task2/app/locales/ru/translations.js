export default {
  errors: {
    description: "Это поле",
    inclusion: "{{description}} is not included in the list",
    exclusion: "{{description}} is reserved",
    invalid: "{{description}} is invalid",
    confirmation: "{{description}} не совпадает с {{on}}",
    accepted: "{{description}} must be accepted",
    empty: "{{description}} не может быть пустым",
    blank: "{{description}} должно быть заполнено",
    present: "{{description}} must be blank",
    collection: "{{description}} must be a collection",
    singular: "{{description}} can't be a collection",
    tooLong: "{{description}} is too long (maximum is {{max}} characters)",
    tooShort: "{{description}} is too short (minimum is {{min}} characters)",
    before: "{{description}} must be before {{before}}",
    after: "{{description}} must be after {{after}}",
    wrongDateFormat: "{{description}} must be in the format of {{format}}",
    wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
    notANumber: "{{description}} must be a number",
    notAnInteger: "{{description}} must be an integer",
    greaterThan: "{{description}} must be greater than {{gt}}",
    greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
    equalTo: "{{description}} must be equal to {{is}}",
    lessThan: "{{description}} must be less than {{lt}}",
    lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
    otherThan: "{{description}} должен отличаться от {{value}}",
    odd: "{{description}} must be odd",
    even: "{{description}} must be even",
    positive: "{{description}} must be positive",
    date: "{{description}} must be a valid date",
    onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
    onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
    email: "{{description}} должно иметь корректный формат e-mail адреса",
    phone: "{{description}} must be a valid phone number",
    url: "{{description}} must be a valid url",
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
    passwordConfirm: 'Подтвердите пароль',
  },

  buttons:{
    back: 'Вернуться',
    edit: 'Редактировать',
    save: 'Сохранить',
    delete: 'Удалить',
    cancel: 'Отмена'
  }
};
