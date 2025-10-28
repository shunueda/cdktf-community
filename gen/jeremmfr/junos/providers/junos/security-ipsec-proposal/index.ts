// https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityIpsecProposalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal#authentication_algorithm SecurityIpsecProposal#authentication_algorithm}
  */
  readonly authenticationAlgorithm?: string;
  /**
  * Text description of IPSec proposal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal#description SecurityIpsecProposal#description}
  */
  readonly description?: string;
  /**
  * Encryption algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal#encryption_algorithm SecurityIpsecProposal#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Lifetime, in kilobytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal#lifetime_kilobytes SecurityIpsecProposal#lifetime_kilobytes}
  */
  readonly lifetimeKilobytes?: number;
  /**
  * Lifetime, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal#lifetime_seconds SecurityIpsecProposal#lifetime_seconds}
  */
  readonly lifetimeSeconds?: number;
  /**
  * The name of IPSec proposal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal#name SecurityIpsecProposal#name}
  */
  readonly name: string;
  /**
  * IPSec protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal#protocol SecurityIpsecProposal#protocol}
  */
  readonly protocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal junos_security_ipsec_proposal}
*/
export class SecurityIpsecProposal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_ipsec_proposal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityIpsecProposal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityIpsecProposal to import
  * @param importFromId The id of the existing SecurityIpsecProposal that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityIpsecProposal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_ipsec_proposal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.14.0/docs/resources/security_ipsec_proposal junos_security_ipsec_proposal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityIpsecProposalConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityIpsecProposalConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_ipsec_proposal',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationAlgorithm = config.authenticationAlgorithm;
    this._description = config.description;
    this._encryptionAlgorithm = config.encryptionAlgorithm;
    this._lifetimeKilobytes = config.lifetimeKilobytes;
    this._lifetimeSeconds = config.lifetimeSeconds;
    this._name = config.name;
    this._protocol = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_algorithm - computed: false, optional: true, required: false
  private _authenticationAlgorithm?: string; 
  public get authenticationAlgorithm() {
    return this.getStringAttribute('authentication_algorithm');
  }
  public set authenticationAlgorithm(value: string) {
    this._authenticationAlgorithm = value;
  }
  public resetAuthenticationAlgorithm() {
    this._authenticationAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationAlgorithmInput() {
    return this._authenticationAlgorithm;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // encryption_algorithm - computed: false, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifetime_kilobytes - computed: false, optional: true, required: false
  private _lifetimeKilobytes?: number; 
  public get lifetimeKilobytes() {
    return this.getNumberAttribute('lifetime_kilobytes');
  }
  public set lifetimeKilobytes(value: number) {
    this._lifetimeKilobytes = value;
  }
  public resetLifetimeKilobytes() {
    this._lifetimeKilobytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeKilobytesInput() {
    return this._lifetimeKilobytes;
  }

  // lifetime_seconds - computed: false, optional: true, required: false
  private _lifetimeSeconds?: number; 
  public get lifetimeSeconds() {
    return this.getNumberAttribute('lifetime_seconds');
  }
  public set lifetimeSeconds(value: number) {
    this._lifetimeSeconds = value;
  }
  public resetLifetimeSeconds() {
    this._lifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeSecondsInput() {
    return this._lifetimeSeconds;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_algorithm: cdktf.stringToTerraform(this._authenticationAlgorithm),
      description: cdktf.stringToTerraform(this._description),
      encryption_algorithm: cdktf.stringToTerraform(this._encryptionAlgorithm),
      lifetime_kilobytes: cdktf.numberToTerraform(this._lifetimeKilobytes),
      lifetime_seconds: cdktf.numberToTerraform(this._lifetimeSeconds),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_algorithm: {
        value: cdktf.stringToHclTerraform(this._authenticationAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._encryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifetime_kilobytes: {
        value: cdktf.numberToHclTerraform(this._lifetimeKilobytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lifetime_seconds: {
        value: cdktf.numberToHclTerraform(this._lifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
