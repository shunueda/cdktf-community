// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallSslsshprofileHttpsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#adom ObjectFirewallSslsshprofileHttpsA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#allow_invalid_server_cert ObjectFirewallSslsshprofileHttpsA#allow_invalid_server_cert}
  */
  readonly allowInvalidServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#cert_probe_failure ObjectFirewallSslsshprofileHttpsA#cert_probe_failure}
  */
  readonly certProbeFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#cert_validation_failure ObjectFirewallSslsshprofileHttpsA#cert_validation_failure}
  */
  readonly certValidationFailure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#cert_validation_timeout ObjectFirewallSslsshprofileHttpsA#cert_validation_timeout}
  */
  readonly certValidationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#client_cert_request ObjectFirewallSslsshprofileHttpsA#client_cert_request}
  */
  readonly clientCertRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#client_certificate ObjectFirewallSslsshprofileHttpsA#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#encrypted_client_hello ObjectFirewallSslsshprofileHttpsA#encrypted_client_hello}
  */
  readonly encryptedClientHello?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#expired_server_cert ObjectFirewallSslsshprofileHttpsA#expired_server_cert}
  */
  readonly expiredServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#id ObjectFirewallSslsshprofileHttpsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#invalid_server_cert ObjectFirewallSslsshprofileHttpsA#invalid_server_cert}
  */
  readonly invalidServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#min_allowed_ssl_version ObjectFirewallSslsshprofileHttpsA#min_allowed_ssl_version}
  */
  readonly minAllowedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#ports ObjectFirewallSslsshprofileHttpsA#ports}
  */
  readonly ports?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#proxy_after_tcp_handshake ObjectFirewallSslsshprofileHttpsA#proxy_after_tcp_handshake}
  */
  readonly proxyAfterTcpHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#quic ObjectFirewallSslsshprofileHttpsA#quic}
  */
  readonly quic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#revoked_server_cert ObjectFirewallSslsshprofileHttpsA#revoked_server_cert}
  */
  readonly revokedServerCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#scopetype ObjectFirewallSslsshprofileHttpsA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#sni_server_cert_check ObjectFirewallSslsshprofileHttpsA#sni_server_cert_check}
  */
  readonly sniServerCertCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#ssl_ssh_profile ObjectFirewallSslsshprofileHttpsA#ssl_ssh_profile}
  */
  readonly sslSshProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#status ObjectFirewallSslsshprofileHttpsA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#udp_not_quic ObjectFirewallSslsshprofileHttpsA#udp_not_quic}
  */
  readonly udpNotQuic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#unsupported_ssl ObjectFirewallSslsshprofileHttpsA#unsupported_ssl}
  */
  readonly unsupportedSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#unsupported_ssl_cipher ObjectFirewallSslsshprofileHttpsA#unsupported_ssl_cipher}
  */
  readonly unsupportedSslCipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#unsupported_ssl_negotiation ObjectFirewallSslsshprofileHttpsA#unsupported_ssl_negotiation}
  */
  readonly unsupportedSslNegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#unsupported_ssl_version ObjectFirewallSslsshprofileHttpsA#unsupported_ssl_version}
  */
  readonly unsupportedSslVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#untrusted_cert ObjectFirewallSslsshprofileHttpsA#untrusted_cert}
  */
  readonly untrustedCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#untrusted_server_cert ObjectFirewallSslsshprofileHttpsA#untrusted_server_cert}
  */
  readonly untrustedServerCert?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https fortimanager_object_firewall_sslsshprofile_https}
*/
export class ObjectFirewallSslsshprofileHttpsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_sslsshprofile_https";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallSslsshprofileHttpsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallSslsshprofileHttpsA to import
  * @param importFromId The id of the existing ObjectFirewallSslsshprofileHttpsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallSslsshprofileHttpsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_sslsshprofile_https", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_sslsshprofile_https fortimanager_object_firewall_sslsshprofile_https} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallSslsshprofileHttpsAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallSslsshprofileHttpsAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_sslsshprofile_https',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._allowInvalidServerCert = config.allowInvalidServerCert;
    this._certProbeFailure = config.certProbeFailure;
    this._certValidationFailure = config.certValidationFailure;
    this._certValidationTimeout = config.certValidationTimeout;
    this._clientCertRequest = config.clientCertRequest;
    this._clientCertificate = config.clientCertificate;
    this._encryptedClientHello = config.encryptedClientHello;
    this._expiredServerCert = config.expiredServerCert;
    this._id = config.id;
    this._invalidServerCert = config.invalidServerCert;
    this._minAllowedSslVersion = config.minAllowedSslVersion;
    this._ports = config.ports;
    this._proxyAfterTcpHandshake = config.proxyAfterTcpHandshake;
    this._quic = config.quic;
    this._revokedServerCert = config.revokedServerCert;
    this._scopetype = config.scopetype;
    this._sniServerCertCheck = config.sniServerCertCheck;
    this._sslSshProfile = config.sslSshProfile;
    this._status = config.status;
    this._udpNotQuic = config.udpNotQuic;
    this._unsupportedSsl = config.unsupportedSsl;
    this._unsupportedSslCipher = config.unsupportedSslCipher;
    this._unsupportedSslNegotiation = config.unsupportedSslNegotiation;
    this._unsupportedSslVersion = config.unsupportedSslVersion;
    this._untrustedCert = config.untrustedCert;
    this._untrustedServerCert = config.untrustedServerCert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // allow_invalid_server_cert - computed: false, optional: true, required: false
  private _allowInvalidServerCert?: string; 
  public get allowInvalidServerCert() {
    return this.getStringAttribute('allow_invalid_server_cert');
  }
  public set allowInvalidServerCert(value: string) {
    this._allowInvalidServerCert = value;
  }
  public resetAllowInvalidServerCert() {
    this._allowInvalidServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInvalidServerCertInput() {
    return this._allowInvalidServerCert;
  }

  // cert_probe_failure - computed: true, optional: true, required: false
  private _certProbeFailure?: string; 
  public get certProbeFailure() {
    return this.getStringAttribute('cert_probe_failure');
  }
  public set certProbeFailure(value: string) {
    this._certProbeFailure = value;
  }
  public resetCertProbeFailure() {
    this._certProbeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certProbeFailureInput() {
    return this._certProbeFailure;
  }

  // cert_validation_failure - computed: true, optional: true, required: false
  private _certValidationFailure?: string; 
  public get certValidationFailure() {
    return this.getStringAttribute('cert_validation_failure');
  }
  public set certValidationFailure(value: string) {
    this._certValidationFailure = value;
  }
  public resetCertValidationFailure() {
    this._certValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationFailureInput() {
    return this._certValidationFailure;
  }

  // cert_validation_timeout - computed: true, optional: true, required: false
  private _certValidationTimeout?: string; 
  public get certValidationTimeout() {
    return this.getStringAttribute('cert_validation_timeout');
  }
  public set certValidationTimeout(value: string) {
    this._certValidationTimeout = value;
  }
  public resetCertValidationTimeout() {
    this._certValidationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidationTimeoutInput() {
    return this._certValidationTimeout;
  }

  // client_cert_request - computed: false, optional: true, required: false
  private _clientCertRequest?: string; 
  public get clientCertRequest() {
    return this.getStringAttribute('client_cert_request');
  }
  public set clientCertRequest(value: string) {
    this._clientCertRequest = value;
  }
  public resetClientCertRequest() {
    this._clientCertRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertRequestInput() {
    return this._clientCertRequest;
  }

  // client_certificate - computed: true, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // encrypted_client_hello - computed: true, optional: true, required: false
  private _encryptedClientHello?: string; 
  public get encryptedClientHello() {
    return this.getStringAttribute('encrypted_client_hello');
  }
  public set encryptedClientHello(value: string) {
    this._encryptedClientHello = value;
  }
  public resetEncryptedClientHello() {
    this._encryptedClientHello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedClientHelloInput() {
    return this._encryptedClientHello;
  }

  // expired_server_cert - computed: true, optional: true, required: false
  private _expiredServerCert?: string; 
  public get expiredServerCert() {
    return this.getStringAttribute('expired_server_cert');
  }
  public set expiredServerCert(value: string) {
    this._expiredServerCert = value;
  }
  public resetExpiredServerCert() {
    this._expiredServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredServerCertInput() {
    return this._expiredServerCert;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // invalid_server_cert - computed: false, optional: true, required: false
  private _invalidServerCert?: string; 
  public get invalidServerCert() {
    return this.getStringAttribute('invalid_server_cert');
  }
  public set invalidServerCert(value: string) {
    this._invalidServerCert = value;
  }
  public resetInvalidServerCert() {
    this._invalidServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidServerCertInput() {
    return this._invalidServerCert;
  }

  // min_allowed_ssl_version - computed: true, optional: true, required: false
  private _minAllowedSslVersion?: string; 
  public get minAllowedSslVersion() {
    return this.getStringAttribute('min_allowed_ssl_version');
  }
  public set minAllowedSslVersion(value: string) {
    this._minAllowedSslVersion = value;
  }
  public resetMinAllowedSslVersion() {
    this._minAllowedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAllowedSslVersionInput() {
    return this._minAllowedSslVersion;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // proxy_after_tcp_handshake - computed: true, optional: true, required: false
  private _proxyAfterTcpHandshake?: string; 
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }
  public set proxyAfterTcpHandshake(value: string) {
    this._proxyAfterTcpHandshake = value;
  }
  public resetProxyAfterTcpHandshake() {
    this._proxyAfterTcpHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAfterTcpHandshakeInput() {
    return this._proxyAfterTcpHandshake;
  }

  // quic - computed: true, optional: true, required: false
  private _quic?: string; 
  public get quic() {
    return this.getStringAttribute('quic');
  }
  public set quic(value: string) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // revoked_server_cert - computed: true, optional: true, required: false
  private _revokedServerCert?: string; 
  public get revokedServerCert() {
    return this.getStringAttribute('revoked_server_cert');
  }
  public set revokedServerCert(value: string) {
    this._revokedServerCert = value;
  }
  public resetRevokedServerCert() {
    this._revokedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokedServerCertInput() {
    return this._revokedServerCert;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sni_server_cert_check - computed: true, optional: true, required: false
  private _sniServerCertCheck?: string; 
  public get sniServerCertCheck() {
    return this.getStringAttribute('sni_server_cert_check');
  }
  public set sniServerCertCheck(value: string) {
    this._sniServerCertCheck = value;
  }
  public resetSniServerCertCheck() {
    this._sniServerCertCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniServerCertCheckInput() {
    return this._sniServerCertCheck;
  }

  // ssl_ssh_profile - computed: false, optional: false, required: true
  private _sslSshProfile?: string; 
  public get sslSshProfile() {
    return this.getStringAttribute('ssl_ssh_profile');
  }
  public set sslSshProfile(value: string) {
    this._sslSshProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSshProfileInput() {
    return this._sslSshProfile;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // udp_not_quic - computed: true, optional: true, required: false
  private _udpNotQuic?: string; 
  public get udpNotQuic() {
    return this.getStringAttribute('udp_not_quic');
  }
  public set udpNotQuic(value: string) {
    this._udpNotQuic = value;
  }
  public resetUdpNotQuic() {
    this._udpNotQuic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpNotQuicInput() {
    return this._udpNotQuic;
  }

  // unsupported_ssl - computed: false, optional: true, required: false
  private _unsupportedSsl?: string; 
  public get unsupportedSsl() {
    return this.getStringAttribute('unsupported_ssl');
  }
  public set unsupportedSsl(value: string) {
    this._unsupportedSsl = value;
  }
  public resetUnsupportedSsl() {
    this._unsupportedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslInput() {
    return this._unsupportedSsl;
  }

  // unsupported_ssl_cipher - computed: true, optional: true, required: false
  private _unsupportedSslCipher?: string; 
  public get unsupportedSslCipher() {
    return this.getStringAttribute('unsupported_ssl_cipher');
  }
  public set unsupportedSslCipher(value: string) {
    this._unsupportedSslCipher = value;
  }
  public resetUnsupportedSslCipher() {
    this._unsupportedSslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslCipherInput() {
    return this._unsupportedSslCipher;
  }

  // unsupported_ssl_negotiation - computed: true, optional: true, required: false
  private _unsupportedSslNegotiation?: string; 
  public get unsupportedSslNegotiation() {
    return this.getStringAttribute('unsupported_ssl_negotiation');
  }
  public set unsupportedSslNegotiation(value: string) {
    this._unsupportedSslNegotiation = value;
  }
  public resetUnsupportedSslNegotiation() {
    this._unsupportedSslNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslNegotiationInput() {
    return this._unsupportedSslNegotiation;
  }

  // unsupported_ssl_version - computed: true, optional: true, required: false
  private _unsupportedSslVersion?: string; 
  public get unsupportedSslVersion() {
    return this.getStringAttribute('unsupported_ssl_version');
  }
  public set unsupportedSslVersion(value: string) {
    this._unsupportedSslVersion = value;
  }
  public resetUnsupportedSslVersion() {
    this._unsupportedSslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedSslVersionInput() {
    return this._unsupportedSslVersion;
  }

  // untrusted_cert - computed: false, optional: true, required: false
  private _untrustedCert?: string; 
  public get untrustedCert() {
    return this.getStringAttribute('untrusted_cert');
  }
  public set untrustedCert(value: string) {
    this._untrustedCert = value;
  }
  public resetUntrustedCert() {
    this._untrustedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedCertInput() {
    return this._untrustedCert;
  }

  // untrusted_server_cert - computed: true, optional: true, required: false
  private _untrustedServerCert?: string; 
  public get untrustedServerCert() {
    return this.getStringAttribute('untrusted_server_cert');
  }
  public set untrustedServerCert(value: string) {
    this._untrustedServerCert = value;
  }
  public resetUntrustedServerCert() {
    this._untrustedServerCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untrustedServerCertInput() {
    return this._untrustedServerCert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      allow_invalid_server_cert: cdktf.stringToTerraform(this._allowInvalidServerCert),
      cert_probe_failure: cdktf.stringToTerraform(this._certProbeFailure),
      cert_validation_failure: cdktf.stringToTerraform(this._certValidationFailure),
      cert_validation_timeout: cdktf.stringToTerraform(this._certValidationTimeout),
      client_cert_request: cdktf.stringToTerraform(this._clientCertRequest),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      encrypted_client_hello: cdktf.stringToTerraform(this._encryptedClientHello),
      expired_server_cert: cdktf.stringToTerraform(this._expiredServerCert),
      id: cdktf.stringToTerraform(this._id),
      invalid_server_cert: cdktf.stringToTerraform(this._invalidServerCert),
      min_allowed_ssl_version: cdktf.stringToTerraform(this._minAllowedSslVersion),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      proxy_after_tcp_handshake: cdktf.stringToTerraform(this._proxyAfterTcpHandshake),
      quic: cdktf.stringToTerraform(this._quic),
      revoked_server_cert: cdktf.stringToTerraform(this._revokedServerCert),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sni_server_cert_check: cdktf.stringToTerraform(this._sniServerCertCheck),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
      status: cdktf.stringToTerraform(this._status),
      udp_not_quic: cdktf.stringToTerraform(this._udpNotQuic),
      unsupported_ssl: cdktf.stringToTerraform(this._unsupportedSsl),
      unsupported_ssl_cipher: cdktf.stringToTerraform(this._unsupportedSslCipher),
      unsupported_ssl_negotiation: cdktf.stringToTerraform(this._unsupportedSslNegotiation),
      unsupported_ssl_version: cdktf.stringToTerraform(this._unsupportedSslVersion),
      untrusted_cert: cdktf.stringToTerraform(this._untrustedCert),
      untrusted_server_cert: cdktf.stringToTerraform(this._untrustedServerCert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_invalid_server_cert: {
        value: cdktf.stringToHclTerraform(this._allowInvalidServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_probe_failure: {
        value: cdktf.stringToHclTerraform(this._certProbeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_validation_failure: {
        value: cdktf.stringToHclTerraform(this._certValidationFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_validation_timeout: {
        value: cdktf.stringToHclTerraform(this._certValidationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert_request: {
        value: cdktf.stringToHclTerraform(this._clientCertRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted_client_hello: {
        value: cdktf.stringToHclTerraform(this._encryptedClientHello),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expired_server_cert: {
        value: cdktf.stringToHclTerraform(this._expiredServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_server_cert: {
        value: cdktf.stringToHclTerraform(this._invalidServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_allowed_ssl_version: {
        value: cdktf.stringToHclTerraform(this._minAllowedSslVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      proxy_after_tcp_handshake: {
        value: cdktf.stringToHclTerraform(this._proxyAfterTcpHandshake),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quic: {
        value: cdktf.stringToHclTerraform(this._quic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoked_server_cert: {
        value: cdktf.stringToHclTerraform(this._revokedServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_server_cert_check: {
        value: cdktf.stringToHclTerraform(this._sniServerCertCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ssh_profile: {
        value: cdktf.stringToHclTerraform(this._sslSshProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_not_quic: {
        value: cdktf.stringToHclTerraform(this._udpNotQuic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_ssl: {
        value: cdktf.stringToHclTerraform(this._unsupportedSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_ssl_cipher: {
        value: cdktf.stringToHclTerraform(this._unsupportedSslCipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_ssl_negotiation: {
        value: cdktf.stringToHclTerraform(this._unsupportedSslNegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unsupported_ssl_version: {
        value: cdktf.stringToHclTerraform(this._unsupportedSslVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untrusted_cert: {
        value: cdktf.stringToHclTerraform(this._untrustedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untrusted_server_cert: {
        value: cdktf.stringToHclTerraform(this._untrustedServerCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
