import { Container, Flex } from "@chakra-ui/react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";
import Card from "components/Card/Card";
import { CustomButton } from "components/shared/CustomButton";
import React from "react";
import customRobotoNormal from "../../../fonts/Roboto-Regular.ttf";
import customRobotoBold from "../../../fonts/Roboto-Bold.ttf";
import customRobotoItalic from "../../../fonts/Roboto-Italic.ttf";
import { useHistory } from "react-router-dom";
import useQuery from "hooks/useQuery";

export const ExaminationSlip = () => {
  const query = useQuery();

  const registration = query.get("registratin_no");
  const first_name = query.get("first_name");
  const second_name = query.get("second_name");
  const last_name = query.get("last_name");
  const mda_code = query.get("mda_code");
  const phone_no = query.get("phone_no");
  const cadre = query.get("cadre");

  const history = useHistory();
  return (
    <Container maxW="container.md">
      <Flex>
        <CustomButton
          onClick={() => {
            history.push("/auth/main");
          }}
        >
          Close
        </CustomButton>
      </Flex>
      <Flex direction="row">
        {/* <Card> */}

        <PDFViewer height="700" width="1100">
          <Document>
            <Page style={styles.body}>
              <Image
                style={styles.image}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHExMSExQWFBYXGRsZGhkYFhkZGBgWGhgYGhkZHBwaITckGSEpHBsZJDMjMzgvMDIwGSI2OzYvOiowMS8BCwsLDw4PGxERHC8oIicvLTAvMTA0LzQvLzEwLy8vLToyOC8tLy8vMjAxLy8xLzEvLzotLTE6Ly8yLy8xLS8wLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcIAgH/xABAEAACAgEDAgQDBgMFBgcBAAABAgMRAAQSIQUxBhMiQQdRYRQyQnGBkSOCoTNScpLBFWJjsbLwCBZTc4OTokP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgEDAwQCAQUBAAAAAAAAAQIRAwQSIRMxQQVRcZFhsYEiUqHB0RT/2gAMAwEAAhEDEQA/AO44xjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGYdROumVndgiqCSzEBQB3JJ4AwDJjKXJ8S9Ej7R5rLfMgj9A+tE7yPqFOaPj/wAczdFYRQR8FFfziCVpieFG3aeAOSfxdvfKucauzZafI5JNVfa+DoWfucq6H8S9RO6RSQRyO7BVbzPJFsQFuwwPJ78fQe2XHxD4x0/h9ljk3tIy7tsahiFsgMSSAASDXuaPGQpxauyZ6fJCexrn8clkwMhug+I4OvqTC9lfvKwKuv5qea+vY/PJjLJ32MZRcXTXJ9YxjJIGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwBjGMAYxjAGMYwD8ziPxY69NPqvsnnDylo7EQ/2nBCsST5jAENZAVbHBIsdqlBZSAdpo0auj86PfPMmqaPUzTEMZAWamchmYMxKliAAS25STQ9V5lllUTr0ePfO/YydI0f2udY1ajJ5cdli21ncqCxPfv2Hyr3zvXiPrEPhjTWw3AL5cae7kLwv5ULJ+QPfgHz75RjYsKbutH3W1FX891j5ZsnUPq7MhZq4G6RnFHgkbjwDQv57R9M545NqbR6eXTPLKKfCXj/I0YMssYUAM0ihQOACX9IF3VGq96/PL78aenbHScH+0iaMi+bjtgR9CHIP+EfPOfzEoNy+lgQQwaiCGBuxyDYBsc8D5Z86qeTXAiQn3BLu0jKtiwL7cc/L6ZEZLbRplxPqKSfZPx3vgaXqEnRnjmhkZHUgKRbg33Ubjxdfdb0n+o9G9F1n27TxS71cugJZAQrGuSFblefwmyO3NZ5ulhUKxarogk+wBIP6Cwa+mdi+DUgk0b07NUpBViCFJAb0+4BDAHv6lY9yc1wS8HB6hiqp/HB0LGMZ0nmDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjMU8ywKzsaVQWJ+QAsn9sAx6zWJol3SOqC6BJqyewHzP0yL1nieDTCwWkPuI13EHaxCkezHaaXv71VnIHXa4I76vUb0O0LDEHiO2yABXLGR3Kg8FfuiyF3GT6X0MatFbUyNM9EEbjtQn2WuTQK0zWbVTdgVWySc0HUI+ohjG17G2sCrKVagaIYAg0Qf1zcyldJ0r6CVmfTSRRQny4yHVmaMA1IRCbkjtj/AA33FTTD322+CddQodGDqwsMpBUj5gjg5YgivGGpfR6LVSRi3WFyvYU200xv2Hc/QZ5vh0tcMASpANfRS559/Uy/0zv3xN1v2PQSC+ZSsQ+oY24/+tXzhcHNE3ZJPbn1NdV89qgfrnNnlTo9X07EmnJ+/wCu4j0SyMFAYktShWazVKFHPcu39cmeq+E5/D0EcsxovLJDtPP3N2xl99rBZD+QQ+5y/wDwy8IfZEXV6mIrPbeWr3canuxX2Ym/qBXazmD406n06WL5tJJ/kUKP33n9sr06g3I0ep354wxpV+zl8wEwZeOR9ewHH/f5Zlk6O0UME8gfbOCUssKCsYip554pg3uHGY4WNUSeO/Jvi/p8h++dK+Hiw+JdJL0/Ujf5RDpyQwR7IZT3BV9wNcAMo7HnPGruJ06rJsUcjVrz/r6OXSaRW22L5o2SbPqQnn67c6J8DZZEl1KEfw3jjk4qkcFgRXf1WT8vT9RlP630qbo0rxTIVIYhDVK4AVg6/MFh+m4A85YPhPr/ALLrhHfEgkjHy9QE6n9lYD88vjbUkmYarHCeJyh8/R3LNbXapNEheQ7VFAnnuxCgcd7JA/XMzMEBJ4Ayo+IJX1m2bTQyakWqna6hXU2GMXm+haViTIKLcKG7lew8QlNP4ngkdkYvHtNXIhRbtwOT2sISLq/zsCR0XUYtdu8t1crW4A8rfax3F0chpfDMWljHkM+ndVoMp3Gz93cGsN6tv+VefSKgoNV9raOSN9urgcpIhkjCuAF3o271lHUqwYBjZQmyMhsk6FjNLpetHUIlkUFbsEGrVlJVlNcWGBHHHGbuSQMYxgDGMYAxjGAMYxgDGMYAyA8ZS+XpyOQrvGrGgfSWFg3xRrbzx6ubFjJ/NPqumOshljBALoygnsCQQCf1yH2BSutaVSsDCFornhZlYguwDNseTaeF3VtDE0aAVSDVg00MkwuJwrKeQe11V3R4K0Ctd1BBHN6q6pOp6eVFX+ItOwPczIyMin6712fQxke2NNqTGQ6HvyPkQf8ATKN00yxIdG6g04YubKmnWgGibj0uvf67uQQQwJU3mPpKrPPLNGGVTuWQEIoMi+Xtb08tagsGNmn9uwzPp06tUilopVFB0NOB8jfEicn0sCL5oEAjJ03qBLGCbaky2aHCyLf9pGCbI5FryVJok8M10VInxf4fl8QyadQVWFC8jk8kyUBGAvv3e+3B+ePDXgbS9CptvnS2D5koVmVgK9Aqo/05+ZNZahmDUzDTKWbsPkCSSTQAA5JJIAH1yNquzTqz27U+BqNQmkRpJGVEUEszEKqgdySeAM5b4/WHxHqNMmmnjlkmG3cHV4Y4kDsb2nuxZjfPEVUPfa+KPVp2hjgKrFHqNzEEXIFjeMgEn0gmwSK44F98gtF0HQ6zp2ol8ytQkTFg0gGx13lGKCgQ4CgE37AUbys3u4RXT6jHDI05NNLwvcxeK/Dhj1Wm0unCvv067HJpXkjExkPp/EQt/wAwH5QPSte/S5I5onCSJyD+Eg/hI91I4I/aiARm8LdHTqmpihVyA70xTbuACFjZoi9vv9R886DqII/h2kY2LqY3kYUyosyIRbEMFqSu2013FFRxmHTbe5cHdh9Uw9J3cl2dqvllj6Xq9L4404d4kejTI4DNFJXNHupoghhRog8ZWW+Gp6RMmo0kzMUkiYRvVlEdi6hxVkqQouuAQSbsXnouth6hEsmnKmNrrapXm6NqQCpvuCAckbzp2prk41mcW9vZ+PwQ/XdMJPLdwzxx+ooFVtz7k2Da/B9wPcXxR5zJruobU3owCg1vItSewVR95yTwALs8CzxmzrtSIaQAM73tS/vfMn5KLFt7X7kgHXXTjSVLK3mSDsaoLfcRpdIO4vliO7GslmZqmOVF8yV6NCkFd+4HHC0eTV2VHNCjXen6NWn1TGIyjdGfLBClpFhABjLkKJNtXyjAV6iOBNavVHVNZ7ew+WfOl1EeggaSSgJXL3YoEbFja/b+GqPftWZqVyssfvgyUE6lFBCCQMARW1mUbkocWCoY1XLmxdk2jIrw3pzBCCwIZ2eQgiiPMcuAR7EAgH6g5K5ouxUYxjJAxjGAMYxgDGMYAxjGAMxvyCAaNd/l9ecyZq6jXxac7XkRTV0WANfOu9YBUuqQR+Fykhd3DKTIzkbm8uaOUtSgLwGmdjXaye2fXh3XKD90hVr0kVUUiLJGKPekdVP1RstEoTWxlk8uS1YITTIbFVY9ieDWVx9COntHFuLssY3sRW4khVNewAjoDmgO5Nk5zVKyUWmBEAtAoB9wBz+2a3VdENclE7WU7kcfejcA04/Kz9CCQbBIPx0mI+WbsBjYo0a4+X1yI1vVZOmahIpLa62OFP8AFQ3uRto2iRWojtYJoCjdk+AR2l6zL1OKKSSfZ5i2I4Fosa9Sg2zuQbFqR2zJ/wCX5JYVn05RZmCuPMMgYnghZX9TP+oJBAIogETGhSKR3fTFY5GNyLsBVz7lq/F35B7myDlP0HxBk6HrD0/qMKRDcBHNGxKbGP8ADLbu6nsXFUQbUUSIUfLYKv4n8barSTeT1PQo5Qh1jEmyM8FRIG2MzWCeVZR7FbsY0Hxaj6eoSLpUMag2AkwUX8/7Hv8AXvnWPFnheDxXD5MwII5SRa3xt81P/Mdj+2cO8WfDHWeHVaRa1ES8l4wQyj5tGbIH1Bau5rJdoikS2o+K6TncemQbtpUOJqcKe6hhGGUc+xyu9c8XP1yWNlhZCAI1j855r59IQMu4EkgULuh+ul4W8J6nxUxXTpaqaaVjtiT3ot7mq9IBPI7DnO1eBfhrB4XYTO32jUezldqx332LZ5rjcTddqsgxW7uRKEZR2tWjR8J+GdX5CjVQwxhQSqtIzupJLE7FG1GJPcMT2HG0DJHSdQk0qbkndKTeY9Qpk2rVlvWRKR9d1ZLeJ/FUfSHi0yKZtVPxFCprg363b/8Amgo88n0mgaNZdTDHDGi6xkZV2hY9tpuUCiSwtz9eBz2w4+xMUkqRudABmiSZyC8qq7EcjkWFU/3Vsgfv3JJkZY1kHqAI+oysHrb6zULFErbiBW5Ttij5Lyn8LMeFUX7k9rBm9ZCREygsxrkk8ntfbj9BQyb4JIPr+qBpI6BYrElD8cjBQ1DuBe4/RSc0emPD4ldYthEHlyFVPHAj08NEe4G6VefdT8s3NOAZ9OD+Iuo+jeWzgj6jYcmulaIdLiRWKfw1K762+gdrJ7elVs+5W8rBXyGbWh050qIhkeUqK3vtLtXuxUAE/Ws2sj4usaedlRZ4yzfdAdbb/D/e/TJDNCBjGMAYxjAGMYwBjGMAYxjAIjxDK8cVROVlY0lKG3H3DDg7ebNFTwADZAOXRdOXTAUW3XZ9Z9Tdm3C6b5WbPzN85o67SxyalG53qoJO9u7bkjUKTtqvNegO6Kfrn1D9+OQWu99igH0+WqObIH3gSp2ntRUiiWsDfjUJM+3i0Vm+W62Ct+ZAIJ+Sr8hkIJPt8pcdnYBf8A4U/keW/nzJ1XWbIi4smeRUWvww2F3WOwK2QfYyjP3pg/iJ+f8Aoczm+yJRYkXYAB2HGQXUIR1HVwx1awjzH+h3Axj6HcoYfRTm11/qo6MizMLiDASEd0Q8b/qFJBI/u7j+GjStFCOoyvLMiszlmO9QTt3EIpvtSkcexv8APJlKgi89ajuJ2A/iKp8tvxB69NH6mhXvdHvnB/jR1T/aPUWjFFYI1j7d2YeYxv34dR+hzqXhycal5Ajh0TYywR80/JRmJO2PgBtnAvae/fhHixJI9bq1lNyCeTdXb7xIr6bar6Vi7QRZ/CXxU1XQlSKVRqYVoDcSJVX2Cv2YAdgRftuAzuPh3r8PiSITQNuW6IPDow7q49jyPoQQQSCDnlHOqf8Ah+dhqNUoPoMSFh/vBzsP7F8lMNHZYYYulxnaEijTcxoBEUWWdjXA5sk/nnKPFPxm2lo9DGD7CaW6/NI+5+hYj/Ccsnxs1babpjqprzZI42r+7ZYj9dtH6E555w2Ei2eA+vyQ9Vg1EzmR5pPLkd+S3mjy159gGKduABQoZ6F6OgfzHPMnmSAk/eCbyY1+g8soQPrfcnPKMCs7IENOWUKR3DkjbX61nozr8raJVLOIWdwsiMSsczBSE2yA0LCha7sAgYDsYToMlp4hoNasnZZxtJ/4oAAB/NVWh/utlgzmfUtMjKkkKICV3IQoU7qtTYHHcZcPDvWv9s7yqkIlJuIovIAPM49grei/dlf2AJRlYaI7q0LadjsHqRg6DtZUhgt+wItT9GOTbSJ1BYHFMjsHF9iNjMpIPyNH6ED5ZpdaFSfyj/XNTw9qiWn09f2bCWI9gQ1O6A+9OefkJVGRB02gyb1/T49aGElsCKKlvRX1Q+lufmDkZ4dZtLJNp5JGZlNxqxJHk3wyliWYgkBrY16DShwDmkJ1M7iyVEUUkY9iS0oeh86Ccn+8B2u9afTxvqIJGG4H0AgsCj7WeJgQfSChlQn8VqOe2aEFlxjGAMYxgDGMYAxjGAM1tYZAjeVt3+1ix354se1+45zZxgEBp9A87FmDLuJLlmUNyACFVCQvpAW7sC+7MWzZ6rGUAKggbXS1UnYXUbXoc0CK4HG75A5LYwCtnQN1Y+oGNVWloMApUgoF3AMw3BXY0oOyNeQGv40ELySbCNrofV7gVRsH3BBBH580bAn9ZONKjyEWEUtQ7mheRukcxh9Q4BeQgKq9v7qoDXz7sfqeBwKSSbRKP3run/2mDpwSN6kMRVorAqW54B27gO9k9iFaqz1LQv0ORPXvVwSrVRG2rVhdG7sEV2PAqzddJB5A5Nsxtm7W3+gHYD5Ad8rvjNgGgDMqLUhtiANw8sAWeL2ljX0OJpUEb/hnTiISsqhQWCgAAClFk8f7zsP0ziPxp6YdD1J5K9OoRJAfbco8tgP8in+fOuaTqkmmXbEN6WxBGnmk+8xY+pDR5OUr4rq3XdMsv8NpNOWc7bV1iIAkBRrPB2MeQRt7c5CaqifJx7L98E+q/YOoiEixqEZPydAZVP5Urj+YZQc6R8DOifb9Y+pb7unTj6yyhlH7IJL/AMS5K7hnQfjXEJOlTE91khI/MzIv/JjnnbO3fH7qJhg02nBoSyM7fVYgKH+aRT/KM4jiQRZPhz0s9X6jpI6sLIJW+ixfxOfoWCr/ADZ6I8SwiWIEgMFdSQRYpjsa79grk/pnI/g9A3TRLrCI18weVGzn8Ktcm1R3BYILvunbOk6zqUuqR42UqrqVJ+zzj0kUaJ4HHvkWqogjNNo26pL5akKqg2asKgIAAUe59vYUflRsXR9D/sUiHczKxYqzVZ3M0hX0gCwzPxX3SO+1iI7wyQdRIUZWBRr2m9p3ptBrseX4+hyz6mETqVP6EdwRyCPqDzkwSoMgeuA6Zi5ttxG0DuSSFVRfuSQPlziLoz6ZFkUj7QGMh5JS2ADRcc7Ciqtgd0R9tis2eowvr4uCEliYNdWNykMDV8qwANX2JF3yNzpOuOvjDldrAsrAGxuUkGjXI4+mEkmwafT0eeVJGUpsjkVuG2lpJEcBS6gsFCd6A9fHvWTqPS/PPF0efSQGUhg4K2NpIcBxfYg9wxGTGMuQaHTPO2t5pUnd6aWjtofeAYjdu3Hg1RGb+MYAxjGAMYxgDGMYAxjGAMYxgGn1f+wm/wDbf/pOaXTxuMYbtGm/n+9IzKp/RVcfz5n664XTylmVF2HczsFUL+K2PA4vk8Zzrxj4gMunRY0VotVF5bO18CKQ7gAOCSHq7+vNVlJOnbKZMkYRcn4LB1D4laPT15ZfUEix5S+miG7s1DuAK7+oGjRrRX4oxGNydPKsw+5GSCjk/wDEX7oHc2PyDHjObsw0nlM0Vr6mI38SLZAJC8pTKw4Nng/XMM+mEbMG2sQeWVgymvdWBoj8sy6rs5NTlz4YQyNJRkuPL/ksMnjDqOoIf7QUClVOyJPLBYmt5ZT3o+44U0BzetJ4k1RlV5J01Qj3qFliRomDUCwChW/CpBP7cnISKWJVZSOSKU7iAptSTVeoVY7jvftmZ28wKoZ9i8qC/ClgN9dgoLc/tZPfK75WYvPFYFJTfUvtXFFT6jpfsjkVSkkrVkBb4Fnk12+edN+AGvKTaqD8LxrKPoUbYf3Ei/5crWp6YNUph9TSB2XYq72G0Elwykhhww49lJ7c5cvgR01dK+skZl8ykRVsbvL5YuPmrEqPzQ5rjlZ3Y5zSUcqalV8+V7o3P/EBplbTaWX8SzmMf4XikZv6xr+2cV0umOrYIvHzPyHzzs/x63zx6KFRYaR2I+qoFBPyFO375QNH09enRNu3KxVWHoI80EkEqx7AUSD2NEd8ZJqJM5zf9GJXJ9kv2S69fn0fl+S66ZYoxEohjW2UFTbmTcXYlV9XH9Tkj/5s6hpnZxqjKqts3eUhhNqa7IDZALDsbHNiwYFIzomZWZx+CTbILKWN67hamwK9xwLGa3nxBdv4rNkMSCp20NtcEGzd+9VxmW+VnBDNF4ZOc31E+ElwdR0nxOjWBTLFIZwaZErYR/6gdqAB/u9weKIpjv8ATPiPpdUQsoeA13cWl+q/UvaqHcC9wrsa4/HAhogfKjf+t8D+mbiVO5RY1YhCp2ygoXS98gY/eFKTtHBsV8st1WjXS5NRqNzgk1FW74O6zSLPskjIZZoyoI/ECpkjb8q3/wCfMfhMVB/8s/8AXUSnKB8PuuPEvkFF8qASz7wTYBBBUiqPqkJvjj24s3jwdqF1ULSIysjSMy0QSoIUlXr7rbtxr2sXzmsXbs68WWOSKa8lhxjGXNBjGMAYxjAGMYwBjGMAYxjAGMYwClfEvpUvVIIzGfQjb3TnkAeluO+3k19b/DlEXpOokhWAiAIH8wPtJlF2SocGtps8V+I5245ROrdNbp8jBY3MbepCiMwUHunpHpo3Q4FFQLo55+ueWMd2P4fFjHpsWSbc75Vd+CpQ+H00gLSSkAiiRSDae4JPtx/TIzrLaaNQsA3OWHqBYqB78ng/pkz1vw/JrJFkbfEhAVTJGfvDcWABIKmueQL571xpHocOlP8AEd3IrgDaOe1/meO+ebHJKLTySd96qj0H6fpHp5RildNLzT8FZaW/wMf0/rmaNL4UfoMtulghQj+AgXn1Md5FIr/iHHB+fsc+9PrJJNoC7Ra8KvHK+pWscEOGB7cFc1lrv7Y/bPFj6H23Tr4VlXGhZyxWBgDtChVlpdoo8sSWvnufc1Q4zLpNFq9I6yxB45F5VlUgr8xzww+YIo+4yxymduKeqbkcGwJNvPHe4/8AKcFJXDqWYfxLBD0fL5oXu5/74yn/ALZrskd0/T1kkpZMkm1wnxwQPVY9d1WQzTbnY9rQ0q+yqAaUfT9TZs5rfYpI9paBiQwY2slEDunFUDZ5FHnuMsrCYqws/wBn6akAPm7av7/ax2s/eH6Z9Q0xY7Ado2VVcgghu/uCVb3vaRh62bfKQj6coS3wyST9+LKXIgSxt2Dml54Hy55OYPM2cBD+gFZd31EqbLsjgHcnJt257CqVefzHFnNZ3ilFvDET6Rx6S24gcEewJrv3B7ZeOtfmP0zin6JbbU7v3X/CF6Q2nYss4IPG1rYACuxrsfz4yYfoEesUeVNai67Oourqqq6zCvSNPrT/AA2eNjzVhhVd/n/X/WtnpPhqSGdWjZpNvqcIlEIQQL9Xu3tyTRocEjOWVzk3jk0/arPXxen6WOnUZpbkqb9/5RrxdI1GjSaNBC4lABYg+YqgEUjEgKDZvg/eOWf4XdIn0ck0rUsLLsq73yK33h9FG5b9y1fhzLB06XXMqBJU3EbmKOmxPxEFgPVXb6kcVeXyCJdOqqgCqoCqBwAAKAH6Z36CWaa3ZOEuFxRxZdLhxyi8d8fng2MYxnpEDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYBp9R0a6+No27H3HdSOVYfUGj+mVBvCE07HeYypXaTuYgrzzs2/U8bv1PfL1jOfLp8eVpyXYvHJKCpFX0ng9I+WkYn32KqAmqvm27cd8xdX8DRa0fw5ZoWA9pXdD/iVz/yIy24yY6bEu0V9ETnKSps5D1H4Z6pPuPFMPnZRz/KwIH+bIabwTroxX2Zx9Q0Tf9LHO7jFZbox8HDLRY5O+fs4RD4K1zdtM5/MxL/1MMlen/DbVyEFzFEPfc25h+iCj++diz8Ix0oiOixxd8lN6L4Ci0FGWaaVvkHeNPz2o1/uSM39V4Qim7My/INtdf8A9Dcf3yyYystNil3ijthKUFUWUV/BkkLKUMb7aoszpVBgAAQ1ABm7H3yz9F6aOlJtvczHc7VW5u3A9gAAAPkPc2TJ4yuLTY8cnKK5LzyzkqbP3GMZ0mYxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAMYxgDGMYAxjGAf/9k="
              />

              <Text style={styles.state}>Kano State Government</Text>
              <Text style={styles.state}>
                Office OF The Head Of Civil Service
              </Text>
              <Text style={styles.small}>
                Human Resources Development And Sevice Improvement Directorate
              </Text>
              <Text style={styles.state}>
                Department Of Promotional Examination
              </Text>
              <Text style={styles.state}>
                (Computer Base Promotional Examination)
              </Text>
              <Text style={styles.border}></Text>
              <Text style={styles.date}>Monday,22 November 2021</Text>
              <Text style={{ fontSize: "" }}>Dear Sir/Ma</Text>
              <Text
                style={{
                  fontSize: "13",
                  textAlign: "center",
                  textDecoration: "underline",
                }}
              >
                ACKNOWLEDGEMENT/EXAMINATION SLIP
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={{ fontSize: "12", marginTop: "10" }}>
                    1.
                    <Text style={{ fontSize: "12" }}>
                      {" "}
                      Examination Number : {registration}
                    </Text>
                  </Text>
                  <Text style={{ fontSize: "12", marginTop: "10" }}>
                    2.
                    <Text style={{ fontSize: "12" }}>
                      {" "}
                      Full Name : {first_name} {second_name}{" "}
                      {last_name === "null"}
                    </Text>
                  </Text>
                  <Text style={{ fontSize: "12", marginTop: "10" }}>
                    3.
                    <Text style={{ fontSize: "12" }}>
                      {" "}
                      MDA Code : {mda_code}
                    </Text>
                  </Text>

                  <Text style={{ fontSize: "12", marginTop: "10" }}>
                    4.
                    <Text style={{ fontSize: "12" }}>
                      {" "}
                      Exam Status : Regular
                    </Text>
                  </Text>
                  <Text style={{ fontSize: "12", marginTop: "10" }}>
                    5.
                    <Text style={{ fontSize: "12" }}>
                      {" "}
                      Phone Number : {phone_no}
                    </Text>
                  </Text>
                  <Text style={{ fontSize: "12", marginTop: "10" }}>
                    5.
                    <Text style={{ fontSize: "12" }}> Cadre : {cadre}</Text>
                  </Text>
                </View>
                <View>
                  <Image
                    src="data:image/png;base64,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"
                    style={{ width: "190", height: "190", marginTop: "20" }}
                  />
                </View>
              </View>
              <Text style={{ textDecoration: "underline" }}>Note</Text>
              <Text>.</Text>
              <Text style={{ fontSize: "12", marginTop: "" }}>
                1.
                <Text style={{ fontSize: "12px" }}>
                  {" "}
                  Bring The Copy Of Examination To The EXamination Venue And
                  Present The Slip To Invigilator
                </Text>
              </Text>
              <Text style={{ fontSize: "", marginTop: "10px" }}>
                2.
                <Text style={{ fontSize: "12px" }}>
                  {" "}
                  You Are Advice To Keep A Copy Of This Slip For Reference.
                </Text>
              </Text>
              <Text style={{ fontSize: "", marginTop: "10px" }}>
                3.
                <Text style={{ fontSize: "12px" }}>
                  {" "}
                  If You Miss Your Schedule You Forfeit The Right To sit For The
                  Examination
                </Text>
              </Text>
              <Text style={{ fontSize: "", marginTop: "10px" }}>
                4.
                <Text style={{ fontSize: "12px" }}>
                  {" "}
                  Mobile Phone And Other Electronic Are Not Allowed In The
                  Examination Hall{" "}
                </Text>
              </Text>
              <Text style={{ fontSize: "", marginTop: "10px" }}>
                5.
                <Text style={{ fontSize: "12px" }}>
                  {" "}
                  Strictly Adhere To Covid-19 Protocol,Always Wear Ypur Face
                  Mask{" "}
                </Text>
              </Text>
              {/* <Image
                src="data:image/png;base64,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"
                style={styles.qr}
              /> */}
              <Text style={{ textAlign: "center", marginTop: "30px" }}>
                Powered By Brainstorm It Solution
              </Text>
              <Text
                style={styles.pageNumber}
                render={({ pageNumber, totalPages }) =>
                  `${pageNumber} / ${totalPages}`
                }
                fixed
              />
            </Page>
          </Document>
        </PDFViewer>
        {/* </Card> */}
      </Flex>
    </Container>
  );
};

Font.register({
  family: "CustomRoboto",
  fonts: [
    { src: customRobotoNormal },
    {
      src: customRobotoBold,
      fontStyle: "normal",
      fontWeight: "bold",
    },
    {
      src: customRobotoItalic,
      fontStyle: "italic",
    },
  ],
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 55,
    paddingBottom: 85,
    paddingHorizontal: 35,
  },

  image: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "120px",
  },
  qr: {
    display: "block",
    marginTop: "3px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "70",
  },
  state: {
    textAlign: "center",
    fontWeight: "100",
    marginTop: "6px",
    fontSize: "",
  },
  small: {
    textAlign: "center",
    fontSize: "16px",
    marginTop: "6px",
  },
  border: {
    marginTop: "6px",
    borderBottom: "2px black solid",
  },
  date: {
    fontSize: "",
    marginLeft: "380px",
    marginTop: "4px",
  },
  flex: {
    marginBottom: "6px",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
