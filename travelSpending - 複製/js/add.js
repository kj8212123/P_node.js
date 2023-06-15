function radioCheck(element){
  var checked = document.querySelector('input.country[checked="checked"]')
  if (checked != null) {
      checked.removeAttribute('checked')
  }
  var input = element.lastElementChild
  input.setAttribute('checked','checked')
  const name = input.getAttribute('value')
  // console.log(name)
  // console.log(document.getElementById('selectedCountry'))
  document.getElementById('selectedCountry').innerHTML=name
  return true
}

function createTrip(){
  const list = document.getElementsByClassName('country')
  // console.log(list)
  var arr = Array.prototype.slice.call( list )
  var ele=arr.find(ele => ele.getAttribute('checked') =='checked')
  console.log(ele)
}