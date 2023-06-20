import React from "react";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";


export default function MailForm() {
  const configuration = new Configuration({
    organization: "org-4TAuSeSPo9RtgDT0OgD8QsvB",
    apiKey: "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",
  });



  const openai = new OpenAIApi(configuration);
  const [name, setName] = useState("");
  const [dest, setDest] = useState("");
  const [sig, setSig] = useState("");
  const [subj, setSubj] = useState("");
  const [lang, setLang] = useState("English");
  const [nbr, setNbr] = useState("100");
  const [tone, setTone] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [loadedData, setLoadedData] = useState();

  const Response = () => {
    return new Promise((resolve) => {
      resolve(openai.createCompletion({
        model: "text-davinci-003",
        prompt: `write me an email from ${name} to ${dest} about ${subj} with the signature ${sig} that's has ${nbr} words in the ${lang} language with a ${tone} tone   `,
        max_tokens: 2000,
        temperature: 0.2,
      }))
    });
  };

  // this function will be called when the button get clicked
  const buttonHandler = async () => {
    // show the loading dialog
    setIsLoading(true);

    // do the fake request and wait for it to finish
    const result = await Response();
    console.log(result.data.choices[0]);
    const res=result.data.choices[0].text.slice(2);
    console.log(res)    ;
    setLoadedData(res);

    // auto hide the loading dialog when the asynchronous operation is done
    setIsLoading(false);
  };
  return (
    <div>
      <br></br>
      <div class="flex justify-center items-center w-screen h-screen bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div class="flex">
              <h1 class="font-bold uppercase text-5xl">
                Generate your email<br></br> using ai
              </h1>
            </div>
            <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Your Name*"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="To*"
                onChange={(event) => {
                  setDest(event.target.value);
                }}
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Signature*"
                onChange={(event) => {
                  setSig(event.target.value);
                }}
              />
              <select
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                onChange={(event) => {
                  setLang(event.target.value);
                }}
              >
                <option value="English">English</option>
                <option value="Afrikaans">Afrikaans</option>
                <option value="Albanian">Albanian</option>
                <option value="Arabic">Arabic</option>
                <option value="Armenian">Armenian</option>
                <option value="Basque">Basque</option>
                <option value="Bengali">Bengali</option>
                <option value="Bulgarian">Bulgarian</option>
                <option value="Catalan">Catalan</option>
                <option value="Cambodian">Cambodian</option>
                <option value="Chinese (Mandarin)">Chinese (Mandarin)</option>
                <option value="Croatian">Croatian</option>
                <option value="Czech">Czech</option>
                <option value="Danish">Danish</option>
                <option value="Dutch">Dutch</option>
                <option value="Estonian">Estonian</option>
                <option value="Fiji">Fiji</option>
                <option value="Finnish">Finnish</option>
                <option value="French">French</option>
                <option value="Georgian">Georgian</option>
                <option value="German">German</option>
                <option value="Greek">Greek</option>
                <option value="Gujarati">Gujarati</option>
                <option value="Hebrew">Hebrew</option>
                <option value="Hindi">Hindi</option>
                <option value="Hungarian">Hungarian</option>
                <option value="Icelandic">Icelandic</option>
                <option value="Indonesian">Indonesian</option>
                <option value="Irish">Irish</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Javanese">Javanese</option>
                <option value="Korean">Korean</option>
                <option value="Latin">Latin</option>
                <option value="Latvian">Latvian</option>
                <option value="Lithuanian">Lithuanian</option>
                <option value="Macedonian">Macedonian</option>
                <option value="Malay">Malay</option>
                <option value="Malayalam">Malayalam</option>
                <option value="Maltese">Maltese</option>
                <option value="Maori">Maori</option>
                <option value="Marathi">Marathi</option>
                <option value="Mongolian">Mongolian</option>
                <option value="Nepali">Nepali</option>
                <option value="Norwegian">Norwegian</option>
                <option value="Persian">Persian</option>
                <option value="Polish">Polish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Punjabi">Punjabi</option>
                <option value="Quechua">Quechua</option>
                <option value="Romanian">Romanian</option>
                <option value="Russian">Russian</option>
                <option value="Samoan">Samoan</option>
                <option value="Serbian">Serbian</option>
                <option value="Slovak">Slovak</option>
                <option value="Slovenian">Slovenian</option>
                <option value="Spanish">Spanish</option>
                <option value="Swahili">Swahili</option>
                <option value="Swedish ">Swedish </option>
                <option value="Tamil">Tamil</option>
                <option value="Tatar">Tatar</option>
                <option value="Telugu">Telugu</option>
                <option value="Thai">Thai</option>
                <option value="Tibetan">Tibetan</option>
                <option value="Tonga">Tonga</option>
                <option value="Turkish">Turkish</option>
                <option value="Ukrainian">Ukrainian</option>
                <option value="Urdu">Urdu</option>
                <option value="Uzbek">Uzbek</option>
                <option value="Vietnamese">Vietnamese</option>
                <option value="Welsh">Welsh</option>
                <option value="Xhosa">Xhosa</option>
              </select>

              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                min="10"
                max="500"
                placeholder="Number of words (optional)"
                onChange={(event) => {
                  setNbr(event.target.value);
                }}
              />
              <select
                class="w-full bg-gray-100  mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                
                
                onChange={(event) => {
                  setTone(event.target.value);
                }}
              >
                <option style={{ color: "grey" }}  value="">Select Tone (optional)</option>
                <option style={{ color: "black" }} value="Appreciative">
                  Appreciative
                </option>
                <option style={{ color: "black" }} value="Assertive">
                  Assertive
                </option>
                <option style={{ color: "black" }} value="Awestruck">
                  Awestruck
                </option>
                <option style={{ color: "black" }} value="Candid">
                  Candid
                </option>
                <option style={{ color: "black" }} value="Casual">
                  Casual
                </option>
                <option style={{ color: "black" }} value="Compassionate">
                  Compassionate
                </option>
                <option style={{ color: "black" }} value="Convincing">
                  Convincing
                </option>
                <option style={{ color: "black" }} value="Critical">
                  Critical
                </option>
                <option style={{ color: "black" }} value="Earnest">
                  Earnest
                </option>
                <option style={{ color: "black" }} value="Enthusiastic">
                  Enthusiastic
                </option>
                <option style={{ color: "black" }} value="Formal">
                  Formal
                </option>
                <option style={{ color: "black" }} value="Funny">
                  Funny
                </option>
                <option style={{ color: "black" }} value="Humble">
                  Humble
                </option>
                <option style={{ color: "black" }} value="Humorous">
                  Humorous
                </option>
                <option style={{ color: "black" }} value="Informative">
                  Informative
                </option>
                <option style={{ color: "black" }} value="Inspirational">
                  Inspirational
                </option>
                <option style={{ color: "black" }} value="Joyful">
                  Joyful
                </option>
                <option style={{ color: "black" }} value="Passionate">
                  Passionate
                </option>
                <option style={{ color: "black" }} value="Thoughtful">
                  Thoughtful
                </option>
                <option style={{ color: "black" }} value="Urgent">
                  Urgent
                </option>
                <option style={{ color: "black" }} value="Worried">
                  Worried
                </option>
              </select>
            </div>

            <div class="my-4">
              <textarea
                placeholder="Subject*"
                class="w-full h-20 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                onChange={(event) => {
                  setSubj(event.target.value);
                }}
              ></textarea>
            </div>
            <div class="my-2 w-1/2 lg:w-1/4">
              <button
                onClick={buttonHandler}
                class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Generate Email
              </button>
            </div>
          </div>
          <div
            style={{ display: isLoading || loadedData ? "flex" : "none" }}
            className="modal"
          >
            <div className="modal-content">
              <div style={{ display: !isLoading ? "none" : "flex" }} className="loader"></div>
              <div className="modal-text">{isLoading ? "Writing..." :loadedData && <p style={{whiteSpace:"pre-wrap"}}>{loadedData}</p>}</div>
            </div>

          </div>

          {/* Display loaded data if available */}
          

          <div class="w-full lg:-mt-72 lg:w-2/6 px-8 py-12 ml-auto bg-blue-900 rounded-2xl">
            <div class="flex flex-col text-white">
              <h1 class="font-bold uppercase text-4xl my-4 ">About Us</h1>
              <p class="text-gray-400">
                This Project was made using openAI's API. We help you generate
                custom emails using artificial intelligence.
              </p>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <div class="flex flex-col">
                  <i class="fas fa-phone-alt pt-2 pr-2" />
                </div>
                <div class="flex flex-col">
                  <h2 class="text-2xl">Contact Us</h2>
                  <p class="text-gray-400">Tel: xxx-xxx-xxx</p>
                  <p class="text-gray-400">Fax: xxx-xxx-xxx</p>
                </div>
              </div>

              <div class="flex my-4 w-2/3 lg:w-1/2">
                <a
                  href="https://www.facebook.com/ENLIGHTENEERING/"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i class="fab fa-facebook-f text-blue-900" />
                </a>
                <a
                  href="https://www.linkedin.com/company/enlighteneering-inc-"
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
                >
                  <i class="fab fa-linkedin-in text-blue-900" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
