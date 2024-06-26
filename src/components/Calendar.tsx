export default function Calendar(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props}>
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%233F51B5"
        width="100%"
        height="600"
        scrolling="no">
      </iframe>
    </div>
  );
}
