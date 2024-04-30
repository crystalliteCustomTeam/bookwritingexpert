import CTA from "../CTA/CTA"


const CTAGroup = ({
    classes = ""
}) => {
    return (
        <div className={`d-flex gap-3 ${classes}`}>
            <CTA
                text="Let's Discuss"
                classes="hover:bg-secondary-100"
                handle=""
                bg="bgGray"
                // link="javascript:$zopim.livechat.window.show();"
            />
            <CTA
                text="(302) 883-8877"
                link="tel:302-883-8877"
                bg="transparent"
                color="bgOrange"
                border="border-primary-100 text-white hover:!bg-primary-100 hover:border-transparent hover:text-white"
            />
        </div>
    )
}

export default CTAGroup
