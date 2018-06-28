function deleteCalendarEntry(entry) {
  let $entry = $(entry)
  $entry.parent().remove()
  let id = $entry.data('id')

  $.ajax({
    url: 'entry/delete/' + id,
    method: 'DELETE',
    beforeSend: function(xhr) {
      xhr.setRequestHeader('X-CSRFToken', csrf_token)
    }
  })
}
