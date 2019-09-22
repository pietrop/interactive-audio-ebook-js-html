   // # Form 1: Chapter I, Chapter 1, Chapter the First, CHAPTER 1
   // # Ways of enumerating chapters, e.g.
   const arabicNumerals = '\d+'
   const romanNumerals = '(?=[MDCLXVI])M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})'
   const numberWordsByTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty',
       'seventy', 'eighty', 'ninety'
   ]
   const numberWords = ['one', 'two', 'three', 'four', 'five', 'six',
       'seven', 'eight', 'nine', 'ten', 'eleven',
       'twelve', 'thirteen', 'fourteen', 'fifteen',
       'sixteen', 'seventeen', 'eighteen', 'nineteen'
   ].concat(numberWordsByTens)
   const numberWordsPat = '(' + numberWords.join('|') + ')'
   const ordinalNumberWordsByTens = ['twentieth', 'thirtieth', 'fortieth', 'fiftieth',
       'sixtieth', 'seventieth', 'eightieth', 'ninetieth'
   ].concat(numberWordsByTens)
   const ordinalNumberWords = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth',
       'seventh', 'eighth', 'ninth', 'twelfth', 'last'
   ].concat(numberWords.map((numberWord) => { return numberWord + 'th' }).concat(ordinalNumberWordsByTens))
   const ordinalsPat = '(the )?(' + ordinalNumberWords.join('|') + ')'
   const enumeratorsList = [arabicNumerals, romanNumerals, numberWordsPat, ordinalsPat]
   const enumerators = '(' + enumeratorsList.join('|') + ')'
   const form1 = 'chapter ' + enumerators
       // console.log(form1)
       // # Form 2: II. The Mail
   const enumeratorsTwo = romanNumerals
   const separatorsTwo = '(\. | )'
   const titleCaseTwo = '[A-Z][a-z]'
   const form2 = enumeratorsTwo + separatorsTwo + titleCaseTwo
       // console.log(form2)
       // # Form 3: II. THE OPEN ROAD
   const enumeratorsThree = romanNumerals
   const separatorsThree = '(\. )'
   const titleCaseThree = '[A-Z][A-Z]'
   const form3 = enumeratorsThree + separatorsThree + titleCaseThree
       // console.log(form3)
       // # Form 4: a number on its own, e.g. 8, VIII
   const arabicNumeralsFour = '^\d+\.?$'
   const romanNumeralsFour = '(?=[MDCLXVI])M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})\.?$'
   const enumeratorsListFour = [arabicNumeralsFour, romanNumeralsFour]
   const enumeratorsFour = '(' + enumeratorsListFour.join('|') + ')'
   const form4 = enumeratorsFour
   console.log(form4)

   // const pat = re.compile(form1, re.IGNORECASE)
   const pat = form1;
   //     // # This one is case-sensitive.
   // const pat2 = re.compile('(%s|%s|%s)' % (form2, form3, form4))
   const pat2 = form2 + '|' + form3 + '|' + form4

   console.log(pat)
   console.log('---')
   console.log(pat2)