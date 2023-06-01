navigation.addEventListener("navigate", (event) => {
    if (shouldNotIntercept(event)) {
      return;
    }
    const url = new URL(event.destination.url);
  
    if (url.pathname.startsWith("/articles/")) {
      event.intercept({
        async handler() {
          const articleContent = await getArticleContent(url.pathname);
          renderArticlePage(articleContent);
  
          event.scroll();
  
          const secondaryContent = await getSecondaryContent(url.pathname);
          addSecondaryContent(secondaryContent);
        },
      });
    }
  });
  