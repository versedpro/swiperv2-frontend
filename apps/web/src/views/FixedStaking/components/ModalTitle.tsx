import { CurrencyLogo, Flex, Heading } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import { useTranslation } from '@pancakeswap/localization'
import { UnlockedFixedTag } from './UnlockedFixedTag'

export function ModalTitle({
  tokenTitle,
  token,
  lockPeriod,
  isEnded,
}: {
  isEnded?: boolean
  token: Token
  tokenTitle: string
  lockPeriod?: number
}) {
  const { t } = useTranslation()

  return (
    <Flex alignItems="center">
      <CurrencyLogo currency={token} size="32px" />
      <Heading scale="lg" mx="8px">
        {tokenTitle}
      </Heading>
      {lockPeriod ? (
        <UnlockedFixedTag>
          {lockPeriod}D {isEnded ? t('Ended') : null}
        </UnlockedFixedTag>
      ) : null}
    </Flex>
  )
}
