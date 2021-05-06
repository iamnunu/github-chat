// Load the passed URL into an iframe.
// This gets around restrictive CSP headers.
let url    = decodeURIComponent(window.location.search.replace('?url=', ''))
let iframe = document.createElement('iframe')
iframe.src = "https://html5test.com/"

iframe.id = 'github-chat-box-iframe-inner'
iframe.style.width = '100%'
iframe.style.height = '350px'
iframe.style.border = '0px'

window.onload = () => {
  document.body.appendChild(iframe)
}

