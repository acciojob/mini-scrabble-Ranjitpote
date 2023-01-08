//your code here

    function updateLetterCount() {
      // Get the text from the textbox
      const text = document.getElementById('evaluatedText').value;

      // Update the letter count
      document.getElementById('letterCount').innerHTML = text.length;
    }
  