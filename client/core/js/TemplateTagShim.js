$(document).on('ready', function () {
  
  // If template tag is supported, we are good to go!
  if ('content' in document.createElement('template'))
    return true
  // Else, we shim it.
  $('template.Tool').each(function () {
//    <template class="Tool" id="Files">
    window[$(this).attr('id')].html = this.innerHTML
    $(this).replaceWith('')
  })
})
