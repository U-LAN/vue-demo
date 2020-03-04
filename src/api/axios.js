import axios from 'axios'

const baseUrl = '/api'
let api = {
  // 问答
  getAnswer: async (params = {}) => {
    let url = baseUrl + `/test.docx`

    let res = await axios.request({
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: url,
      method: 'get',
      timeout: 5000
    })
    return res.data
  }
}

export default api
