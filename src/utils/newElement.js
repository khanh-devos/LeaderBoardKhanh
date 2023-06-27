const createNewElement = ({
  type,
  id,
  className,
  content,
  events = {},
}) => {
  const el = document.createElement(type);
  if (id) el.id = id;
  if (className) el.className = className;
  if (content) el.innerHTML = content;

  Object.entries(events).forEach(([fn, handle]) => {
    el.addEventListener(fn, handle);
  });

  return el;
};

export default createNewElement;