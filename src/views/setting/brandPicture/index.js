export default {
  data () {
    return {
      picList: [
        {
          id: '0',
          imgUrl:
            'http://cdn.loonxierp.com/wqt_uploadfiles/201810/1540818186919_0522.jpg',
          imgName: '夏日休闲女鞋',
          edit: false
        },
        {
          id: '1',
          imgUrl:
            'http://cdn.loonxierp.com/wqt_uploadfiles/201810/1540818186919_0522.jpg',
          imgName: '夏日休闲女鞋',
          edit: false
        },
        {
          id: '2',
          imgUrl:
            'http://cdn.loonxierp.com/wqt_uploadfiles/201810/1540818186919_0522.jpg',
          imgName: '夏日休闲女鞋',
          edit: false
        },
        {
          id: '3',
          imgUrl:
            'http://cdn.loonxierp.com/wqt_uploadfiles/201810/1540818186919_0522.jpg',
          imgName: '夏日休闲女鞋',
          edit: false
        },
        {
          id: '4',
          imgUrl:
            'http://cdn.loonxierp.com/wqt_uploadfiles/201810/1540818186919_0522.jpg',
          imgName: '夏日休闲女鞋',
          edit: false
        },
        {
          id: '5',
          imgUrl:
            'http://cdn.loonxierp.com/wqt_uploadfiles/201810/1540818186919_0522.jpg',
          imgName: '夏日休闲女鞋',
          edit: false
        },
        {
          id: '6',
          imgUrl:
            'http://cdn.loonxierp.com/wqt_uploadfiles/201810/1540818186919_0522.jpg',
          imgName: '夏日休闲女鞋',
          edit: false
        },
        {
          id: '7',
          imgUrl:
            'http://cdn.loonxierp.com/wqt_uploadfiles/201810/1540818186919_0522.jpg',
          imgName: '夏日休闲女鞋',
          edit: false
        }
      ],
      searchPicName: ''
    }
  },
  props: {},
  components: {},
  mounted () {},
  computed: {},
  watch: {},
  methods: {
    picEdit (item) {
      item.edit = true
    },
    savePicName (item) {
      item.edit = false
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      console.log(file)
    },
    beforeUpload (file) {
      console.log(file)
    }
  }
}
