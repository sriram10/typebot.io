import { Flex } from '@chakra-ui/layout'
import { ResultsContent } from 'layouts/results/ResultsContent'
import { Seo } from 'components/Seo'
import { TypebotHeader } from 'components/shared/TypebotHeader'
import { TypebotContext } from 'contexts/TypebotContext/TypebotContext'
import { useRouter } from 'next/router'
import React from 'react'
import { UserContext } from 'contexts/UserContext'

const AnalyticsPage = () => {
  const { query } = useRouter()
  return (
    <UserContext>
      <TypebotContext typebotId={query.id?.toString()}>
        <Seo title="Analytics" />
        <Flex overflow="hidden" h="100vh" flexDir="column">
          <TypebotHeader />
          <ResultsContent />
        </Flex>
      </TypebotContext>
    </UserContext>
  )
}

export default AnalyticsPage