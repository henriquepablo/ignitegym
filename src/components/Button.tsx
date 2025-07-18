import { Button as GluestackButton, Text, ButtonSpinner, ScrollView } from "@gluestack-ui/themed"
import { ComponentProps } from "react";

type Props = ComponentProps<typeof GluestackButton> & {
    title: string;
    variant?: "solid" | "outline"
    isLoading?: boolean;
}

const Button: React.FC<Props> = ({ title, variant = "solid", isLoading = false, ...rest }) => {
    return (
        <GluestackButton 
            w="$full"
            h="$14"
            bg={variant === "outline" ? "transparent" : "$green700"}
            borderWidth={variant === "outline" ? "$1" :0}
            borderColor="$green500"
            rounded="$sm"
            $active-bg={variant === "outline" ? "$gray500" : "$green500"}
            disabled={isLoading}
            {...rest}
        >
            {
                isLoading 
                    ? 
                    <ButtonSpinner color="$white"/> 
                    :
                    (
                        <Text 
                            color={variant === "outline" ? "$green500" : "$white"}
                            fontFamily="$heading" 
                            fontSize="$sm"
                        >
                            {title}
                        </Text>
                    )
            }
        </GluestackButton>
    )
}

export default Button;