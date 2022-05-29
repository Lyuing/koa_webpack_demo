
import '@/asset/style.less'
import api from '@/asset/api'
import format from '@/utils/util'

console.warn('process.env.NODE_ENV:', process.env.NODE_ENV)

function renderList(list){
  let arr = list.concat()
  let fragment = ''
  if(arr.length){
    fragment = arr.map(i=>{
      let created = format(i.create_date, 'y-mn-d')
      return `<tr>
        <td>${i.id}</td>
        <td>${i.name}</td>
        <td>${created}</td>
      </tr>`
    })
  }else{
    fragment = `<tr class='no-list'>
      <td colspan="3">未搜索到</td>
    </tr>`
  }
  let tbody = document.getElementsByClassName('tbody')[0]
  tbody.innerHTML = fragment
}

let btn = document.getElementsByClassName('serch')[0]
let input = document.getElementById('serch')
input.onkeyup = function(e){
  if(e.keyCode == 13){
    api.serch(e.target.value).then(res=>{
      renderList(res)
    })
  }
}
btn.onclick = ()=>{
  api.serch(input.value).then(res=>{
    renderList(res)
  })
}


