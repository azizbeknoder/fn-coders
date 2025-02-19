import React from 'react'
import { usersData } from '@/data/users';

export default function Users() {
  return (
    <div className="px-14 py-14">
      <ul className='grid grid-cols-1 md:grid-cols-4 gap-6 '>
        {usersData.map((e, idx) => {
          return (
            <li>
              <div className="border border-black/50 max-w-[400px] px-6 py-6 rounded-lg">
                <img
                  src={e.img}
                  alt=""
                  className="max-w-[100px] max-h-[100px] mb-6  rounded-full"
                />
                <h1 className="mb-4">{e.name}</h1>
                <p className="mb-4">{e.role}</p>
                <p>Parvoz akademiyasi o'quvchisi</p>
                <div className='flex gap-6 mt-6'>
                  <a href={`https://web.telegram.org/${e.telegram}`}>
                    <img
                      src="/telegram.png"
                      alt="Bu yerda rasm mavjud"
                      className="max-w-[50px] max-h-[50px]"
                    />
                  </a>
                  <a href={`https://www.instagram.com/${e.instagram}`}>
                    <img
                      src="/instagram.svg"
                      alt="Bu yerda rasm bor"
                      className="max-w-[50px] max-h-[50px]"
                    />
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

     
    </div>
  );
}
