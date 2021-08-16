export default {
  errors: {
    description: "This field",
    inclusion: "{{description}} is not included in the list",
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
    addBook: 'Add book',
    editBook: 'Edit book',
    title: 'Title',
    author: 'Author',
    pagesCount: 'Pages Count',
    coverURL: 'Link to book cover',
    descriURL: 'Link to description',
    tags: 'Tags',
    avgBookScore: 'Average book score',
    reportsList: 'Reports list',
    reportURL: 'Link to the report',
     
  },
  buttons:{
    back: 'Back',
    edit: 'Edit',
    delete: 'Delete',
    cancel: 'Cancel'
  }
};
