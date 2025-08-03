{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww30040\viewh16680\viewkind0
\deftab720
\pard\pardeftab720\li1440\fi-1440\sa400\qj\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // This is the code for your secure, server-side function.
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \strokec2 \
\pard\pardeftab720\li1440\fi-1440\sa400\qj\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \strokec2 exports.handler = async function(event, context) \{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0// Get the prompt that the user typed on your website.
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0const \{ prompt \} = JSON.parse(event.body);
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \strokec2 \
\pard\pardeftab720\li1440\fi-1440\sa400\qj\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \strokec2 \'a0\'a0\'a0\'a0// Get your secret API key from Netlify's secure storage.
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0const apiKey = process.env.GEMINI_API_KEY;
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \strokec2 \
\pard\pardeftab720\li1440\fi-1440\sa400\qj\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \strokec2 \'a0\'a0\'a0\'a0// The Google Gemini API URL.
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-preview-0520:generateContent?key=$\{apiKey\}`;
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \strokec2 \
\pard\pardeftab720\li1440\fi-1440\sa400\qj\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \strokec2 \'a0\'a0\'a0\'a0try \{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0// Send the request to Google, just like before.
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0const response = await fetch(apiUrl, \{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0method: 'POST',
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0headers: \{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0'Content-Type': 'application/json',
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\},
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0body: JSON.stringify(\{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0contents: [\{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0role: "user",
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0parts: [\{ text: prompt \}]
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\}]
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\}),
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\});
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \strokec2 \
\pard\pardeftab720\li1440\fi-1440\sa400\qj\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0// If Google's response is not OK, throw an error.
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0if (!response.ok) \{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0throw new Error(`API Error: $\{response.statusText\}`);
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\}
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \strokec2 \
\pard\pardeftab720\li1440\fi-1440\sa400\qj\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0// Get the data from Google's response.
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0const data = await response.json();
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \strokec2 \
\pard\pardeftab720\li1440\fi-1440\sa400\qj\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \strokec2 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0// Send the AI's answer back to your website.
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0return \{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0statusCode: 200,
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0body: JSON.stringify(data),
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\};
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \strokec2 \
\pard\pardeftab720\li1440\fi-1440\sa400\qj\partightenfactor0

\f0\fs26\fsmilli13333 \cf0 \strokec2 \'a0\'a0\'a0\'a0\} catch (error) \{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0// If anything goes wrong, send an error message back.
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0return \{
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0statusCode: 500,
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0body: JSON.stringify(\{ error: error.message \}),
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\'a0\'a0\'a0\'a0\};
\f1\fs24 \

\f0\fs26\fsmilli13333 \'a0\'a0\'a0\'a0\}
\f1\fs24 \

\f0\fs26\fsmilli13333 \};
\f1\fs24 \
\pard\pardeftab720\partightenfactor0
\cf0 \strokec2 \
}