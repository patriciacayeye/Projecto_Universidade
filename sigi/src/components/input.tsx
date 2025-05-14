import { colors } from "@/src/styles/colors"
import { ReactNode } from "react"
import { TextInput, View, TextInputProps } from "react-native"

function Input ({children}: {children: ReactNode}){
    return <View className=" w-full h-18 flex-row intems-center gap-3 p-7 border-orange-500 border-2 rounded-lg ">{children}</View>
}

function Field({...rest}:(TextInputProps)){
    return <TextInput className="flex-1 text-white text-lg font-regular "
        placeholderTextColor={colors.gray[200]}
        {...rest}
    />
}

Input.Field = Field
export {Input}