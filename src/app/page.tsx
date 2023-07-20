import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ol className="Linkforall">
        <li>
          <Link href={"/1-props-example"}>
            <span>Props Example</span>
          </Link>
        </li>
        <li>
          <Link href={"/2-children-props-example"}>
            <span>Children Props Example</span>
          </Link>
        </li>
        <li>
          <Link href={"/3-event-example"}>
            <span>Event Example</span>
          </Link>
        </li>
        <li>
          <Link href={"/4-usestate-example"}>
            <span>useState Example</span>
          </Link>
        </li>
        <li>
          <Link href={"/5-usecontext-example"}>
            <span>useContext Example</span>
          </Link>
        </li>
        <li>
          <Link href={"/6-useref-example"}>
            <span>useRef Example</span>
          </Link>
        </li>
      </ol>
    </div>
  );
}
