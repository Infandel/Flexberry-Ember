export default {
  errors: {
    description: "This field",
    inclusion: "{{description}} must correspond a number from 1 to 5",
    exclusion: "{{description}} is reserved",
    invalid: "{{description}} is invalid",
    confirmation: "{{description}} doesn't match {{on}}",
    accepted: "{{description}} must be accepted",
    empty: "{{description}} can't be empty",
    blank: "{{description}} can't be blank",
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
    otherThan: "{{description}} must be other than {{value}}",
    odd: "{{description}} must be odd",
    even: "{{description}} must be even",
    positive: "{{description}} must be positive",
    date: "{{description}} must be a valid date",
    onOrAfter: '{{description}} must be on or after {{onOrAfter}}',
    onOrBefore: '{{description}} must be on or before {{onOrBefore}}',
    email: "{{description}} must be a valid email address",
    phone: "{{description}} must be a valid phone number",
    url: "{{description}} must be a valid url",
    password: 'password',
    passwordDescription: 'Password and password confirmation',
    passwordDontMatch: 'do not match'
  },

  menu: {
    logo: 'Book club',
    desktop: 'Desktop',
    meetings: 'Club meetings',
    books: 'Books',
    speakers: 'Speakers',
    langRu: 'Russian',
    langEn: 'English',
    register: 'Register',
    makeReq: 'Make request',
    toSchedule: 'To schedule',
    login: 'Login',
    logout: 'Log out'
  },

  books: {
    books: 'Books',
    book: 'Book',
    addBook: 'Add book',
    editBook: 'Edit book',
    title: 'Title',
    author: 'Author',
    pagesCount: 'Pages Count',
    coverURL: 'Link to book cover',
    descriURL: 'Link to description',
    tags: 'Tags',
    avgBookScore: 'Average book score',
    
    placeholder: {
      searchByTag: 'Search by tags',
      searchAll: 'Search by title, author or tags',
      author: 'Author credentials',
      title: 'Book title',
      pagesCount: '1 or 2 or 150 etc.',
      coverURL: 'For example: https://www.google.jpg',
      descriURL: 'For example: https://www.google.com/',
      tags: 'awesome,new,nature',
    }     
  },

  speakers: {
    addSpeaker: 'Add speaker',
    speakers: 'Speakers',
    speaker: 'Speaker',
    editSpeaker: 'Edit speaker',
    name: 'Name',
    surname: 'Surname',
    patronymic: 'Patronymic',

    placeholder: {
      searchByCreds: 'Search by credentials',
      name: 'Enter Name',
      surname: 'Enter Surname',
      patronymic: 'Enter Patronymic',
    }
  },

  reports: {
    reportsList: 'Reports list',
    reportURL: 'Link to the report',
    reportInfo: 'Report information',
    reportEdit: 'Edit report',
    editReportFor: 'Edit Report For',
    addReportFor: 'Add Report For',
    addReport: 'Add Report',
    reportFor: 'Report for',
    bookScore: 'Book Score',
    outOf5: 'out of 5',
    presentationURL: 'Link to presentation',
    videoURL: 'Link to video',
    review: 'Review',
    speaker: 'Speaker',
    forBook: 'For Book',
    chooseBook: 'Select a book',
    chooseSpeaker: 'Select a speaker',
    
    placeholder: {
      bookScore: 'Rate a book (from 1 to 5)',
      presentationURL: 'Example: http://www.presentation.com',
      videoURL: 'Example: http://www.video.com',
      review: 'Write a review about the book',

    }
  },

  meetings: {
    addMeeting: 'Add meeting',
    meetingDate: 'Meeting date',
    editMeetingFor: 'Edit meeting for',
    editMeetingDateOrAddReport: 'Edit meeting date or add new report',
    deleteMeeting: 'Delete meeting',
    usefulLinks: 'Useful links',
    watchReportRecord: 'View the recording of the report',
    dlPresentation: 'Download presentation',
    clubMeetings: 'Club Meetings',
    chooseDate: "Enter the date(format: dd.mm.yyyy)",

    placeholder: {
      date: "For example: 20.02.2021"
    },    
  },

  register: {
    username: 'Username',
    email: 'Email',
    password: 'Password',
    passwordConfirm: 'Confirm password',
       
  },
  
  buttons:{
    back: 'Back',
    edit: 'Edit',
    save: 'Save',
    delete: 'Delete',
    cancel: 'Cancel'
  }
};
