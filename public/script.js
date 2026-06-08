document
  .getElementById("generateBtn")
  .addEventListener("click", async () => {

    const feature =
      document.getElementById("feature").value;

    const text =
      document.getElementById("inputText").value;

    const output =
      document.getElementById("output");

    const loading =
      document.getElementById("loading");

    // Empty input validation
    if (!text.trim()) {
      output.textContent =
        "Please enter some text.";
      return;
    }

    loading.textContent = "Generating...";
    output.textContent = "";

    try {

      const response = await fetch(
        "/generate",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            feature,
            text,
          }),
        }
      );

      const data =
        await response.json();

      output.textContent =
        data.response;

    } catch (error) {

      output.textContent =
        "Error generating response.";

      console.error(error);
    }

    loading.textContent = "";
  });