$(document).on('ready', function () {
  // If template tag is supported, we are good to go!
  if ('content' in document.createElement('template'))
    return true
  // Else, we shim it.
  $('template.Tool').each(function () {
//    <template class="Tool" id="Files">
    $(this).replaceWith($('<script type="template" class="Tool" id="' + $(this).attr('id') + '">' + this.innerHTML + '</script>'))
  })
})
