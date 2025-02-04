type ThemeSettings = {
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
};

function applyTheme(theme: ThemeSettings) {
  document.body.style.backgroundColor = theme.backgroundColor;
  document.body.style.color = theme.textColor;
  document.body.style.fontFamily = theme.fontFamily;

  const elements = document.querySelectorAll(
    "h1, h2, h3, p, a, span, div, label"
  );
  elements.forEach((element: any) => {
    element.style.color = theme.textColor;
  });
}

export default applyTheme;
