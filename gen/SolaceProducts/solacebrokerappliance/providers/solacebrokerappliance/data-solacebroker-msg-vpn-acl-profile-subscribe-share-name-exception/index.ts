// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnAclProfileSubscribeShareNameExceptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the ACL Profile.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception#acl_profile_name DataSolacebrokerMsgVpnAclProfileSubscribeShareNameException#acl_profile_name}
  */
  readonly aclProfileName: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception#msg_vpn_name DataSolacebrokerMsgVpnAclProfileSubscribeShareNameException#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The subscribe share name exception to the default action taken. May include wildcard characters.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception#subscribe_share_name_exception DataSolacebrokerMsgVpnAclProfileSubscribeShareNameException#subscribe_share_name_exception}
  */
  readonly subscribeShareNameException: string;
  /**
  * The syntax of the subscribe share name for the exception to the default action taken.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only". The allowed values and their meaning are:
  * 
  * <pre>
  * "smf" - Topic uses SMF syntax.
  * "mqtt" - Topic uses MQTT syntax.
  * </pre>
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception#subscribe_share_name_exception_syntax DataSolacebrokerMsgVpnAclProfileSubscribeShareNameException#subscribe_share_name_exception_syntax}
  */
  readonly subscribeShareNameExceptionSyntax: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception}
*/
export class DataSolacebrokerMsgVpnAclProfileSubscribeShareNameException extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnAclProfileSubscribeShareNameException resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnAclProfileSubscribeShareNameException to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnAclProfileSubscribeShareNameException that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnAclProfileSubscribeShareNameException to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.2.0/docs/data-sources/solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnAclProfileSubscribeShareNameExceptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnAclProfileSubscribeShareNameExceptionConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_acl_profile_subscribe_share_name_exception',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclProfileName = config.aclProfileName;
    this._msgVpnName = config.msgVpnName;
    this._subscribeShareNameException = config.subscribeShareNameException;
    this._subscribeShareNameExceptionSyntax = config.subscribeShareNameExceptionSyntax;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_profile_name - computed: false, optional: false, required: true
  private _aclProfileName?: string; 
  public get aclProfileName() {
    return this.getStringAttribute('acl_profile_name');
  }
  public set aclProfileName(value: string) {
    this._aclProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclProfileNameInput() {
    return this._aclProfileName;
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // subscribe_share_name_exception - computed: false, optional: false, required: true
  private _subscribeShareNameException?: string; 
  public get subscribeShareNameException() {
    return this.getStringAttribute('subscribe_share_name_exception');
  }
  public set subscribeShareNameException(value: string) {
    this._subscribeShareNameException = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeShareNameExceptionInput() {
    return this._subscribeShareNameException;
  }

  // subscribe_share_name_exception_syntax - computed: false, optional: false, required: true
  private _subscribeShareNameExceptionSyntax?: string; 
  public get subscribeShareNameExceptionSyntax() {
    return this.getStringAttribute('subscribe_share_name_exception_syntax');
  }
  public set subscribeShareNameExceptionSyntax(value: string) {
    this._subscribeShareNameExceptionSyntax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeShareNameExceptionSyntaxInput() {
    return this._subscribeShareNameExceptionSyntax;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_profile_name: cdktf.stringToTerraform(this._aclProfileName),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      subscribe_share_name_exception: cdktf.stringToTerraform(this._subscribeShareNameException),
      subscribe_share_name_exception_syntax: cdktf.stringToTerraform(this._subscribeShareNameExceptionSyntax),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_profile_name: {
        value: cdktf.stringToHclTerraform(this._aclProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribe_share_name_exception: {
        value: cdktf.stringToHclTerraform(this._subscribeShareNameException),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscribe_share_name_exception_syntax: {
        value: cdktf.stringToHclTerraform(this._subscribeShareNameExceptionSyntax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
