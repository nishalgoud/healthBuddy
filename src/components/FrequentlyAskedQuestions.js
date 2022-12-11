import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import supplementFacts from "../images/supplementFacts.jpg";

export function FrequentlyAskedQuestions() {
  return (
    <Card>
      <Card.Body>
        <Card.Title as="h1">Frequently Asked Questions ?</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Where can I find out how much of each vitamin and mineral I need ?{" "}
            </Accordion.Header>
            <Accordion.Body>
              To get a list of all vitamins and minerals and how much you need,
              check out the{" "}
              <a
                href="https://www.nal.usda.gov/human-nutrition-and-food-safety/dri-calculator"
                target="_blank"
              >
                free online tool
              </a>{" "}
              from the U.S. Department of Agriculture. Just input a few pieces
              of information about yourself including your age, height, and
              weight. You also can get a list of your daily calorie, protein,
              and other nutritional needs. Keep in mind that the amounts of
              vitamins and minerals you need include everything you get from
              food and beverages—you may or may not need a dietary supplement to
              achieve these amounts. Talk with your healthcare provider to help
              you determine which supplements, if any, might be valuable for
              you. For more detailed information about each vitamin and mineral,
              read our{" "}
              <a
                href="https://ods.od.nih.gov/factsheets/list-VitaminsMinerals/"
                target="_blank"
              >
                vitamin and mineral fact sheets.
              </a>
              <br />
              <br />
              <p>
                In addition, you can get good sources of information on eating
                well from the{" "}
                <a
                  href="https://health.gov/our-work/nutrition-physical-activity/dietary-guidelines/current-dietary-guidelines"
                  target="_blank"
                >
                  {" "}
                  Dietary Guidelines for Americans
                </a>{" "}
                and{" "}
                <a href="https://www.myplate.gov/" target="_blank">
                  ChooseMyPlate.
                </a>{" "}
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How can I get more information about a particular dietary
              supplement such as whether it is safe and effective?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <b>A.</b> Scientific evidence supporting the benefits of some
                dietary supplements (e.g., vitamins and minerals) is well
                established for certain health conditions, but others need
                further study.
              </p>

              <p>
                Research studies in people to prove that a dietary supplement is
                safe are not required before the supplement is marketed, unlike
                for drugs. This is due to the way dietary supplements are
                regulated by the U.S. Food and Drug Administration (FDA). It is
                the responsibility of dietary supplement
                manufacturers/distributors to ensure that their products are
                safe and that their label claims are truthful and not
                misleading. If the FDA finds a supplement to be unsafe once it
                is on the market, only then can it take action against the
                manufacturer and/or distributor, such as by issuing a warning or
                requiring the product to be removed from the marketplace.
              </p>

              <p>
                The manufacturer does not have to prove that the supplement is
                effective, unlike for drugs. The manufacturer can say that the
                product addresses a nutrient deficiency, supports health, or
                reduces the risk of developing a health problem, if that is
                true. If the manufacturer does make a claim, it must be followed
                by the statement “This statement has not been evaluated by the
                Food and Drug Administration. This product is not intended to
                diagnose, treat, cure, or prevent any disease.”
              </p>

              <p>
                Dietary supplements are not intended to treat, diagnose,
                mitigate, prevent, or cure disease. In some cases, dietary
                supplements may have unwanted effects, especially if taken
                before surgery or with other dietary supplements or medicines,
                or if you have certain health conditions. Supplements should not
                replace prescribed medications or the variety of foods important
                to a healthful diet.
              </p>

              <p>
                Do not self-diagnose any health condition. Work with your
                healthcare provider to determine how best to achieve optimal
                health. Also, check with your healthcare provider before taking
                a supplement, especially if you take any medicines or other
                dietary supplements or if you have any health conditions.
              </p>

              <p>
                In addition to talking with your healthcare provider about
                dietary supplements, you can search on-line for information
                about a particular supplement. It is important to ensure that
                you obtain information from reliable sources such as:
              </p>

              <ul>
                <li>
                  <a href="/factsheets/list-all/">
                    ODS dietary supplement fact sheets
                  </a>
                </li>
                <li>
                  <a href="/HealthInformation/Dietary_Reference_Intakes.aspx">
                    Nutrient Recommendations: Dietary Reference Intakes (DRI)
                    and Recommended Dietary Allowances (RDA)
                  </a>
                </li>
                <li>
                  <a href="https://www.fda.gov/food/recalls-outbreaks-emergencies/alerts-advisories-safety-information">
                    Dietary supplement warnings and safety information from the
                    U.S. Food and Drug Administration
                  </a>
                </li>
                <li>
                  <a href="https://www.consumer.ftc.gov/">
                    Consumer information from the Federal Trade Commission
                  </a>
                </li>
              </ul>

              <p>
                For tips on evaluating sources of healthcare information on the
                internet, please see the following document:{" "}
                <a href="/HealthInformation/How_To_Evaluate_Health_Information_on_the_Internet_Questions_and_Answers.aspx">
                  How to Evaluate Health Information on the Internet: Questions
                  and Answers
                </a>
                .
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {" "}
              Where can I find information about the use of dietary supplements
              for a particular health condition or disease?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <b>A.</b> Scientific evidence supporting the benefits of some
                dietary supplements (e.g., vitamins and minerals) is well
                established for certain health conditions, but others need
                further study. Whatever your choice, supplements should not
                replace prescribed medications or the variety of foods important
                to a healthy diet.
              </p>

              <p>
                Dietary supplements are not intended to treat, diagnose,
                mitigate, prevent, or cure disease. In some cases, dietary
                supplements may have unwanted effects, especially if taken
                before surgery or with other dietary supplements or medicines,
                or if you have certain health conditions.
              </p>

              <p>
                Do not self-diagnose any health condition. Work with your
                healthcare provider to determine how best to achieve optimal
                health. Also, check with your healthcare provider before taking
                a supplement, especially if you take any medicines or other
                dietary supplements or if you have any health conditions.
              </p>

              <p>
                In addition to talking with your healthcare provider about
                dietary supplements for a particular health condition or
                disease, you can search on-line for information. It is important
                to ensure that you obtain information from reliable sources such
                as:
              </p>

              <ul>
                <li>
                  <a href="https://medlineplus.gov/">
                    Health Information from the National Library of Medicine’s
                    MedlinePlus Database
                  </a>
                </li>
                <li>
                  <a href="/factsheets/list-all/">
                    ODS dietary supplement fact sheets
                  </a>
                </li>
              </ul>

              <p>
                For tips on evaluating sources of healthcare information on the
                internet, please see the following document:{" "}
                <a href="/HealthInformation/How_To_Evaluate_Health_Information_on_the_Internet_Questions_and_Answers.aspx">
                  How to Evaluate Health Information on the Internet: Questions
                  and Answers
                </a>
                .
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What does the Supplement Facts label on a dietary supplement tell
              me?
            </Accordion.Header>
            <Accordion.Body>
              <div>
                <a id="lnkImage">
                  <img
                    id="imgImage"
                    src={supplementFacts}
                    alt="Sample Supplement Facts label"
                    style={{ borderWidth: "0px" }}
                  />
                </a>
                <div>
                  <p class="caption"></p>
                </div>
              </div>

              <p>
                <b>A.</b> All products labeled as dietary supplements carry a
                Supplement Facts label that is similar to the Nutrition Facts
                label found on food products. It lists the active ingredients
                and their amounts, plus other added ingredients like fillers,
                binders, and flavorings. It also gives a suggested serving size,
                but you and your healthcare provider might decide that a
                different amount is more appropriate for you.
              </p>

              <p>
                In the Supplement Facts label, the amounts of vitamins,
                minerals, and other nutrients like dietary fiber are listed as a
                percentage of the Daily Value or %DV. Each nutrient has one DV
                that applies to all people age 4 and older. For example, the DV
                for vitamin C is 90 milligrams (mg) and the DV for the B-vitamin
                biotin is 30 micrograms (mcg).
              </p>

              <p>
                The %DV allows you to see how much a product contributes to your
                approximate daily needs for that nutrient. For example, if a
                supplement provides 50% of the DV for calcium, it contributes
                about half of your daily needs for calcium.
              </p>

              <p>
                The U.S. Food and Drug Administration (FDA) has a webpage that
                describes the&nbsp;
                <a href="https://www.fda.gov/food/new-nutrition-facts-label/how-understand-and-use-nutrition-facts-label">
                  Nutrition Facts label and DV in more detail
                </a>
                .
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              {" "}
              What is the difference between the RDA and DV for a vitamin or
              mineral?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <b>A.</b> Many terms are used when referring to either the
                amount of a particular nutrient (such as calcium or vitamin D)
                you should get or the amount in a food or dietary supplement.
                The two most common are the Recommended Dietary Allowance (RDA)
                and the Daily Value (DV). These terms can be confusing.
              </p>

              <p>
                RDAs are recommended daily intakes of a nutrient for healthy
                people. They tell you how much of that nutrient you should get
                on average each day. RDAs are developed by the Food and
                Nutrition Board of the National Academies of Sciences,
                Engineering, and Medicine. They vary by age, sex, and whether a
                woman is pregnant or breastfeeding; so there are many different
                RDAs for each nutrient.
              </p>

              <p>
                DVs, established by the U.S. Food and Drug Administration (FDA),
                are used on food and dietary supplement labels. For each
                nutrient, there is one DV for all people ages 4 years and older.
                Therefore, DVs aren’t recommended intakes, but suggest how much
                of a nutrient a serving of the food or supplement provides in
                the context of a total daily diet. DVs often match or exceed the
                RDAs for most people, but not in all cases.
              </p>

              <p>
                DVs are presented on food and supplement labels as a percentage.
                They help you compare one product with another. As an example,
                the %DV for calcium on a food label might say 20%. This means it
                has 260 mg (milligrams) of calcium in one serving because the DV
                for calcium is 1,300 mg/day. If another food has 40% of the DV
                for calcium, it’s easy to see that it provides much more
                calcium.
              </p>

              <p>
                The Dietary Supplement Label Database has a webpage that lists
                the{" "}
                <a href="https://dsld.od.nih.gov/daily-values">
                  DVs for all nutrients
                </a>
                .
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              What are the Upper Limits (ULs) for vitamins and minerals?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <b>A.</b> Our bodies need vitamins and minerals for many things,
                like breaking down the food we eat, making bones and DNA,
                helping muscles contract, and maintaining immunity. But there’s
                no reason to get more than you need, and some nutrients can be
                dangerous in large amounts.
              </p>

              <p>
                Each vitamin and mineral has a recommended amount, which is what
                you should get each day for good health. Most of them also have
                what is called a “tolerable upper intake level” or UL. Getting
                more than the UL can cause health problems. Other vitamins and
                minerals appear to be safe at any dose, while a few have a UL
                only under certain circumstances.
              </p>

              <p>
                Which vitamins and minerals fall into which category? Here’s the
                breakdown:
              </p>

              <ul>
                <li>
                  Nutrients with ULs: calcium, choline, copper, fluoride,
                  iodine, iron, manganese, molybdenum, nickel, phosphorus,
                  selenium, vitamin B6, vitamin C, vitamin D, and zinc
                  <p>
                    Stay under the UL each day for these nutrients to avoid
                    health problems unless your healthcare provider recommends
                    more. For example, very high doses of vitamin B6 can cause
                    severe nerve damage and too much iron can be fatal. The ULs
                    for these nutrients include what you get from food,
                    beverages, fortified foods (including many breakfast
                    cereals), and dietary supplements. But it’s unlikely you’ll
                    go above the UL from food and beverages alone.
                  </p>
                </li>
              </ul>

              <ul>
                <li>
                  Nutrients with ULs, but only from dietary supplements and
                  fortified foods: folate, magnesium, niacin, and vitamin&nbsp;E
                  <p>
                    These vitamins and minerals, as found naturally in food and
                    beverages, won’t cause any health problems. But they can if
                    you get amounts above the UL from supplements or fortified
                    foods.
                  </p>
                </li>
              </ul>

              <ul>
                <li>
                  One nutrient with a UL, but only for certain forms:
                  vitamin&nbsp;A
                  <p>
                    Vitamin A exists in two main forms: preformed vitamin A—such
                    as retinol and retinyl palmitate—in animal products
                    (including meat, poultry, fish, and dairy products); and
                    beta-carotene (in fruits, vegetables, and other plant
                    foods). Dietary supplements can contain both forms.
                  </p>
                  <p>
                    Only preformed vitamin A has a UL because high amounts can
                    cause health problems, such as birth defects during
                    pregnancy and liver damage. Beta-carotene has no UL because
                    high amounts don’t cause these problems.
                  </p>
                </li>
              </ul>

              <ul>
                <li>
                  Nutrients with no ULs: biotin, chromium, pantothenic acid,
                  riboflavin, thiamin, vitamin B12, and vitamin&nbsp;K
                  <p>
                    These nutrients have no identified safety concerns, even at
                    high doses. But there’s no reason to get more than
                    recommended amounts unless your healthcare provider
                    recommends it.
                  </p>
                </li>
              </ul>

              <p>
                Have more questions? See our{" "}
                <a href="/factsheets/list-VitaminsMinerals/">
                  fact sheets on vitamins and minerals
                </a>
                &nbsp;for details about the recommended amounts and ULs.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Where can I find free, accurate information about vitamins,
              minerals, herbs, and other dietary supplements?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <b>A.</b> Good places to start are the&nbsp;
                <a href="/factsheets/list-all/">
                  ODS dietary supplement fact sheets
                </a>
                , which provide helpful information about dietary supplement
                ingredients including recommended amounts, health effects,
                safety, and medication interactions. Many of the ODS fact sheets
                come in three versions—the easy-to-read&nbsp;
                <em>Consumer version</em>&nbsp;in both English and Spanish, and
                the more detailed&nbsp;<em>Health Professional version</em>.
                Read them online or print a copy. In addition,&nbsp;
                <a
                  href="http://nccam.nih.gov/health/herbsataglance.htm"
                  target="_blank"
                >
                  Herbs at a Glance
                </a>
                &nbsp;fact sheets from the National Center for Complementary and
                Integrative Health (NCCIH) provide basic information on specific
                herbs and botanicals—common names, uses, potential side effects,
                and resources for more information.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              {" "}
              Where can I find published scientific studies about dietary
              supplements?
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <b>A.</b> You can search for medical and scientific studies on
                specific dietary supplement ingredients using{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/">PubMed</a>. PubMed is
                a database of the National Library of Medicine that provides
                access to over 30 million journal citations for biomedical
                literature from MEDLINE, life science journals, and online
                books.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}
