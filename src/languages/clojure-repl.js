/*
Language: Clojure REPL
Description: Clojure REPL sessions
Author: Ivan Sagalaev <maniac@softwaremaniacs.org>
Requires: clojure.js
*/

function(hljs) {
  return {
    contains: [
      {
        className: 'prompt',
        begin: /^([\w.-]+|\s*#_)=>/,
        starts: {
          end: /$/,
          subLanguage: 'clojure', subLanguageMode: 'continuous'
        }
      }
    ]
  }
}
