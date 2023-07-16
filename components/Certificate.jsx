import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Certificate = ({platform,title, issue_on ,credentials,CertificateImg, Url}) => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col className="backdrop-blur-sm">
        <Text size={12} weight="bold" transform="uppercase" color="#6d00a3">
          {platform}
        </Text>
        <Text h3 color="6d00a3">
          {title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={CertificateImg}
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col span={3}>
            </Col>
            <Col>
              <Text color="#000000" size={12}>
                {issue_on}
              </Text>
              <Text color="#000000" size={12}>
                Credential no :{credentials}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button
              flat
              auto
              rounded
              css={{ color: "#6d00a3", bg: "#0000000" }}
              href={Url}
            >
              <Text
                css={{ color: "#000000" }}
                size={12}
                weight="bold"
                transform="uppercase"
                href={Url}
              >
                Show Credential
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
