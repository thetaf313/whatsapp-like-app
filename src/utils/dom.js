
export function renderComponent(component, target) {
  const { template, bindEvents } = component();
  target.innerHTML = template;
  if (bindEvents) bindEvents();
}