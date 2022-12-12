# Reset Css works by @emotion

## Setup
```tsx
// React
import * as React from "react";
import {Global, css} from "@emotion/css";
import resetStyle from "@itkyk/emotion-reset-style";

const App: React.FC = () => {
  return (
    <>
      <Global styles={css(resetStyle)}/>
    </>
  )
}
```

```tsx
import {injectGlobal} from "@emotion/css";
import resetStyle from "@itkyk/emotion-reset-style";

injectGlobal(resetStyle);
```

## Contents of style
- The content of style adopts [destyle.css](https://github.com/nicolas-cusan/destyle.css).