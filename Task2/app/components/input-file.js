import Component from '@ember/component';
import { computed } from '@ember/object';
import { set, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  i18n: service(),

  isFileChoosen: computed('uploadData', function () {
    return this.get('uploadData') && this.get('uploadData').files.length;
  }),

  ifRemoveButtonDisabled: computed('isFileChoosen', function () {
    return !this.get('isFileChoosen');
  }),

  fileName: computed('isFileChoosen','i18n.locale', function () {
    return this.get('isFileChoosen') ? this.get('uploadData').files[0].name : get(this, 'i18n').t('books.chooseFile');
  }),

  didInsertElement() {
    this._super(...arguments);

    const onFileAdd = (e, uploadData) => {
      // const hasFiles = uploadData.files.length > 0;
      // const fileName = hasFiles ? uploadData.files[0].name : 'Выберите файл';
      // this.set('fileName', fileName);
      this.uploadDataChanged(uploadData);
    };

    // Initialize jQuery fileupload plugin (https://github.com/blueimp/jQuery-File-Upload/wiki/API).
    this.$('.custom-file-input').fileupload({
      // Disable autoUpload.
      autoUpload: false,

      // Type of data that is expected back from the server.
      dataType: 'json',

      // Maximum number of files to be selected and uploaded.
      maxNumberOfFiles: 1,

      // Enable single file uploads.
      singleFileUploads: true,

      // Disable drag&drop file adding.
      dropZone: null,

      // File add handler.
      add: onFileAdd
    });
  },

  willDestroyElement() {
    this._super(...arguments);
    this.$('.custom-file-input').fileupload('destroy');
  },

  actions: {
    removeFile() {
      set(this, 'uploadData', null);
    }
  }
});
