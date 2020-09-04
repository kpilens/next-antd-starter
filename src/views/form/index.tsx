import React, { useState, useEffect } from 'react';
import Form, { UiSchema } from '@rjsf/core';


export default function View(): JSX.Element {
    const [formSchema, setFormSchema] = useState<ISchema>({ '': '' });

    const uiSchema: UiSchema = {
        toggle: {
            "ui:widget": "radio"
        },
        name: {
            'ui:widget': 'text',
        },
        collegeName: {
            'ui:placeholder': 'Meltwater',
        },
    };

    interface ISchema {
        [key: string]: string | Record<any, string> | any;
    }

    const schema: ISchema = {
        title: '',
        description: 'Short Form Description',
        type: 'object',
        properties: {
            name: {
                type: 'string',
                title: 'Your Full Name',
                description: 'Enter your full name',
            },
            toggle: {
                title: 'Gender',
                description: 'Are you Male or Female?',
                type: 'boolean',
                // enum: ['Male', 'Female'],
                "oneOf": [
                    {
                        "title": "True",
                        "const": true
                    },
                    {
                        "title": "False",
                        "const": false
                    }
                ]
            },
            dropdown: {
                type: 'string',
                title: 'Country',
                description: 'Select from a list of available options',
                default: 'Country',
                enum: ['South Africa', 'Kenya', 'Ghana', 'Nigeria'],
            },
            age: {
                type: 'number',
                title: 'Age',
                description: 'Type your full age in numbers',
            },
        },
        required: ['name', 'age'],
    };
    useEffect(() => {
        // Set Form Schema to default to defined schema in page
        setFormSchema(schema);

        // Try to retrieve existing schema from localstorage
        // const storageForm = JSON.parse(localStorage.getItem('__rjsForm') || '');

        setTimeout(() => {
            // setFormSchema(storageForm)
        }, 3000);

        // return () => {
        //     cleanup
        // };
    }, []);

    // const storageForm = JSON.parse(localStorage.getItem("__rjsForm") || "")
    // console.warn(localStorage.getItem("__rjsForm") || "")

    return (
        <React.Fragment>
            {/* == layout pattern wrapper section === */}
            {/* <MainBox
                bg={theme.custom.main}
                backgroundImage=" url(/layout_pattern.png)"
                minHeight="100vh"
                height="100%"
                position="fixed"
                width={[0, '1%']}
                p={[0, 3]}
            ></MainBox> */}

            {/* === section to render the form Heading and Description with Divider ==== */}
            {/* <FieldWrapper>
                <Heading as="h1" fontWeight="500" size="lg">
                    Advocacy Database Form
                </Heading> */}

            {/* <Flex my="10" justifyContent="flex-start">
                    <Divider m="0" pr="2" borderColor="green.500" borderWidth="3px" orientation="vertical" />
                    <Text fontSize="sm">
                        We will use this information to design a better experience for you based on your needs
                    </Text>
                </Flex> */}
            {/* <Divider /> */}
            {/* </FieldWrapper> */}
            {/* === section to render the form Heading and Description with Divider ==== */}

            {/* =========== Section to generate Form Fields for Public Forms =================== */}
            {/* <FieldWrapper> */}
            <Form
                schema={formSchema}
                uiSchema={uiSchema}
                onSubmit={(data) => {
                    alert("DATA SUBMITTED" + JSON.stringify(data.formData))
                    window.location.replace('/workspaces/office/survey')
                }
                }
            />
            {/* </FieldWrapper> */}
            {/* =========== Section to generate Form Fields for Public Forms =================== */}

            {/* === Section to render the form Button  === */}

            {/* <MainBox
                width="40rem"
                margin={'auto'}
                my={2}
                pb={10}
                alignItems="center"
                justifyContent="center"
            >
                <SubmitButton
                    mt="4"
                    withIcon
                    analyticName="Click Submit Form"
                    buttonName="Submit"
                // border={theme.custom.altBorder}
                />
            </MainBox> */}
            {/* === Section to render the form Button  === */}
        </React.Fragment>
    );
}
