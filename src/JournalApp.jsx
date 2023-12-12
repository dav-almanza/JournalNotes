import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme";

export const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter>
        <>
          <h1> JournalApp </h1>
          <hr />
        </>
      </AppRouter>
    </AppTheme>
  )
}
