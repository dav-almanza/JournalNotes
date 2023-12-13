import { JournalLayout } from "../layout/JournalLayout"
import { NothingSelectedView } from "../views"

export const JournalHomePage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">JournalHomeyPage</Typography> */}
      {/* <MailOutline/> */}
      <NothingSelectedView/>
    </JournalLayout>
  )
}
