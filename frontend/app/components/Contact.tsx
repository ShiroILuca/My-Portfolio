// 連絡先セクション

import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-white flex items-center justify-center p-8"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-light italic text-gray-700 mb-10 text-center">
          Contact
        </h2>

        <div className="bg-[#e8d0d0] border border-gray-200 rounded-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h3 className="text-2xl font-light text-gray-800 mb-4">
            お問い合わせはメールにて
          </h3>

          <p className="text-gray-700 mb-6 text-lg">
            お仕事のご依頼やご質問などございましたら、下記のメールアドレスまでお気軽にご連絡ください。
          </p>

          <div className="bg-white rounded-lg p-4 mb-8 inline-block">
            <a
              href="mailto:manami.iid@gmail.com"
              className="text-gray-800 font-medium text-lg hover:underline"
            >
              manami.iid@gmail.com
            </a>
          </div>

          <div className="mt-4">
            <p className="text-gray-600 mb-4">24時間以内にご返信いたします。</p>
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://github.com/ShiroILuca"
                className="text-gray-700 hover:text-gray-900 transition duration-200 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
