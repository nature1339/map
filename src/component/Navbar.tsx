import { useState } from "react"; /*모바일에서 열고 닫히도록 상태관리*/
import Link from "next/link";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); /*열려있거나 닫힘*/
  return (
    <>
      <div className="navbar">
        <Link className="navbar_logo" href="/">
          nextmap
        </Link>
        <div className="navbar_list">
          <Link href="/stores" className="navbar_list--item">
            맛집목록
          </Link>
          <Link href="/stores/new" className="navbar_list--item">
            맛집등록
          </Link>
          <Link href="/users/likes" className="navbar_list--item">
            찜한가게
          </Link>
          <Link href="/users/login" className="navbar_list--item">
            로그인
          </Link>
        </div>
        {/*mobile button*/}
        <div
          role="presentation"
          className="navbar_button"
          onClick={() => setIsOpen((val) => !val)}
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
          {/*열려있으면, 닫히고 메뉴보이게*/}
        </div>
      </div>

      {/*mobile navbar*/}
      {isOpen && (
        <div className="navbar--mobile">
          <div className="navbar_list--mobile">
            <Link href="/stores" className="navbar_list--item--mobile">
              맛집목록
            </Link>
            <Link href="/stores/new" className="navbar_list--item--mobile">
              맛집등록
            </Link>
            <Link href="/users/likes" className="navbar_list--item--mobile">
              찜한가게
            </Link>
            <Link href="/users/login" className="navbar_list--item--mobile">
              로그인
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
