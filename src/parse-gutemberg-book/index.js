const fs = require('fs');
const nomar = require('nomar');
// const ebook = fs.readFileSync(`./text/${ ebookId }.txt`).toString();

// console.log(ebook)
// eg CHAPTER XLII. to 42
function parseChapterTitleToNumber(text) {
    const textWithoutTrailingDot = text.replace(/\./, '')
    const romanNumeral = textWithoutTrailingDot.replace(/CHAPTER /, '');
    return nomar(romanNumeral);
}

class Book {
    constructor(filename, nochapters, stats) {
        this.filename = filename;
        this.nochapters = nochapters;
        this.lines = this.getLines();
        this.headings = this.getHeadings()
        this.headingLocations = this.headings;
    }

    getContents() {
        return fs.readFileSync(this.filename).toString();
    }

    getLines() {
        // TODO: it might be \r\n
        return this.getContents().split('\r\n')
    }

    getHeadings() {
        const romanNumeralsChapter = /CHAPTER ((?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3}).$|([\w\s]+$))/
        const headings = [];
        this.lines.forEach((line, i) => {
            if (line.match(romanNumeralsChapter)) {
                headings.push(i)
            }
        })

        if (headings.length < 3) {
            console.info('headings: ', headings);
            console.error("Detected fewer than three chapters. This probably means there' s something wrong with chapter detection for this book.")
        }

        this.endLocation = this.getEndLocation()
            // # Treat the end location as a heading.
        headings.push(this.endLocation)
        return headings;
    }

    ignoreTOC() {

    }

    /**
     *  Tries to find where the book ends.
     */
    getEndLocation() {
        const self = this;
        const ends = ["End of the Project Gutenberg EBook",
            "End of Project Gutenberg's",
            "\\*\\*\\*END OF THE PROJECT GUTENBERG EBOOK",
            "\\*\\*\\* END OF THIS PROJECT GUTENBERG EBOOK"
        ]
        const joined = ends.join('|');

        let endLocation;
        const lastLine = this.lines.find((line, i) => {
            return line.match(joined)
        })

        if (lastLine) {
            endLocation = this.lines.indexOf(lastLine);
            this.endLine = this.lines[endLocation]
        } else { // if Can 't find the ending.
            console.info("Can't find an ending line. Assuming that the book ends at the end of the text.")
            endLocation = this.lines.length - 1 //# The end
            this.endLine = false;

        }
        console.info(`End line:: ${this.endLine} at line:: ${endLocation}`);
        return endLocation;
    }

    getTextBetweenHeadings() {
        const chapters = [];
        const lastHeading = this.headingLocations.length - 1;
        this.headingLocations.forEach((headingLocation, i) => {
            if (i != lastHeading) {
                const nextHeadingLocation = this.headingLocations[i + 1]
                const chapterSection = this.lines.slice(headingLocation + 1, nextHeadingLocation)
                chapters.push(chapterSection)
            }
        })
        return chapters;
    }

    getSegmentedChapter() {
        const chapters = [];
        const lastHeading = this.headingLocations.length - 1;
        this.headingLocations.forEach((headingLocation, i) => {
            if (i != lastHeading) {
                const nextHeadingLocation = this.headingLocations[i + 1]
                const chapterSection = this.lines.slice(headingLocation + 1, nextHeadingLocation)
                const chapterTitle = this.lines[headingLocation];
                const chapter = {
                    title: chapterTitle,
                    // could parse the chapter title for the chapter number parseChapterTitleToNumber(chapterTitle)
                    // but using the index of the headingLocations location means can be agnostic of the chapter title notation
                    // eg roman numbers, base 10 etc..
                    chapterNumber: i + 1,
                    text: chapterSection.join(' ')
                }
                chapters.push(chapter);
            }

        })
        return chapters;
    }

    zeroPad() {

    }

    getStats() {

    }

    writeChapters() {

    }


}

module.exports = Book;