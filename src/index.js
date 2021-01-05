const {view} = require("oeil")

const el = view(['div', 
    ['h1', 'Hey there!']
])

document.body.append(el)