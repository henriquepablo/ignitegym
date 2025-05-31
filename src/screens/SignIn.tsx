import { Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed";

import BackgorundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import Input from "@components/Input";
import Button from "@components/Button";

const SignIn: React.FC = () => {
    return (
        <VStack flex={1} bg="$gray700">
            <Image 
                source={BackgorundImg} 
                alt="Pessoas treinando"
                defaultSource={BackgorundImg}
                w="$full"
                h={624}
                position="absolute"
            />

            <VStack flex={1} px="$10" pb="$16">
                <Center my="$24">
                    <Logo />
                    <Text color="$gray100" fontSize="$sm">
                        Treine sua mente e seu corpo
                    </Text>
                </Center>

                <Center gap={5}>
                    <Heading color="$gray100">
                        Acesse a conta
                    </Heading>

                    <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none"/>

                    <Input placeholder="Senha" secureTextEntry/>

                    <Button title="Acessar"/>
                </Center>
            </VStack>
        </VStack>
    )
}

export default SignIn;