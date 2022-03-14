import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Button, Center, toast } from "@chakra-ui/react";
// import Logo from "../../../../assets/img/kano-log.png";
import { useHistory } from "react-router-dom";
import { ExaminationSlip } from "../ExaminationSlip";
import { SUCCESS_TOAST } from "variables/toasts";
import { postTransactions } from "redux/actions/transactions";

export default function FlutterFile({ results }) {
  const history = useHistory();
  const datas = results && results[0];

  const config = {
    public_key: "FLWPUBK_TEST-8151138a8a9d2a1b0ae1b0b832bd494d-X",
    tx_ref: Date.now(),
    amount: 500,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    // specified redirect URL
    // redirect_url:
    //   "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
    customer: {
      // email: datas && datas.email,
      email: "abdulrazakyliman@gmail.com",
      phone_number: datas && datas.phone_no,
      name: datas && datas.first_name,
    },

    customizations: {
      title: "PAYMENT",
      description: "Payment",
      logo:
        "https://s3.eu-west-2.amazonaws.com/openstates.ng.storage/public/setting/setting_kano-logo.png",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  const handlSubmit = () => {
    postTransactions(
      { ...datas, query_type: "insert" },
      () => {
        toast({
          title: "Submited Successfully",
          ...SUCCESS_TOAST,
        });
      },
      (err) => {
        alert("errr");

        console.log("eera", err);
        // toast({ title: "An error occured", ...ERROR_TOAST });
      }
    );
  };

  return (
    <div>
      {/* {JSON.stringify(results)} */}
      <Center>
        <Button
          isLoading={!results}
          mt="20"
          bg="green.500"
          color="white"
          _hover={{
            bg: "green.800",
          }}
          onClick={() => {
            handlSubmit();
            handleFlutterPayment({
              callback: (response) => {
                console.log("TestRespon", response);
                alert("success");
                // toast({ title: "success", ...SUCCESS_TOAST });
                closePaymentModal();
                history.push(
                  `/auth/print-slip?registratin_no=${datas.registration_no}&first_name=${datas.first_name}&second_name=${datas.second_name}&last_name=${datas.last_name}&mda_code=${datas.mda_code}&phone_no=${datas.phone_no}&cadre=${datas.cadre}`
                );
                closePaymentModal();
              },
              onClose: () => {},
            });
          }}
        >
          Procced payment
        </Button>
      </Center>
    </div>
  );
}
