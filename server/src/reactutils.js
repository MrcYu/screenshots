exports.addReactScripts = function (body, addScript) {
  if (addScript) {
    let footer = "</body></html>";
    let frontmatter = body.slice(0, body.length - footer.length);
    addScript = addScript.replace(/<script/ig, "\\x3cscript").replace(/<\/script/ig, "\\x3c/script");
    return (`<!DOCTYPE html>
  ${frontmatter}
  <script>
  ${addScript}
  </script>
  ${footer}`
    );
  } else {
    return `<!DOCTYPE html>\n${body}`;
  }
};

exports.extend = function (...objs) {
  let obj = {};
  for (let extender of objs) {
    for (let attr in extender) {
      obj[attr] = extender[attr];
    }
  }
  return obj;
};
