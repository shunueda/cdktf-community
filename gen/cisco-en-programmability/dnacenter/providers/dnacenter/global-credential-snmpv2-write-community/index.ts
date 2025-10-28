// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalCredentialSnmpv2WriteCommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community#id GlobalCredentialSnmpv2WriteCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community#parameters GlobalCredentialSnmpv2WriteCommunity#parameters}
  */
  readonly parameters: GlobalCredentialSnmpv2WriteCommunityParameters;
}
export interface GlobalCredentialSnmpv2WriteCommunityItem {
}

export function globalCredentialSnmpv2WriteCommunityItemToTerraform(struct?: GlobalCredentialSnmpv2WriteCommunityItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function globalCredentialSnmpv2WriteCommunityItemToHclTerraform(struct?: GlobalCredentialSnmpv2WriteCommunityItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GlobalCredentialSnmpv2WriteCommunityItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GlobalCredentialSnmpv2WriteCommunityItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalCredentialSnmpv2WriteCommunityItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_tenant_id - computed: true, optional: false, required: false
  public get instanceTenantId() {
    return this.getStringAttribute('instance_tenant_id');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // netconf_port - computed: true, optional: false, required: false
  public get netconfPort() {
    return this.getStringAttribute('netconf_port');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // read_community - computed: true, optional: false, required: false
  public get readCommunity() {
    return this.getStringAttribute('read_community');
  }

  // secure - computed: true, optional: false, required: false
  public get secure() {
    return this.getStringAttribute('secure');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // write_community - computed: true, optional: false, required: false
  public get writeCommunity() {
    return this.getStringAttribute('write_community');
  }
}

export class GlobalCredentialSnmpv2WriteCommunityItemList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GlobalCredentialSnmpv2WriteCommunityItemOutputReference {
    return new GlobalCredentialSnmpv2WriteCommunityItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalCredentialSnmpv2WriteCommunityParameters {
  /**
  * Comments to identify the credential
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community#comments GlobalCredentialSnmpv2WriteCommunity#comments}
  */
  readonly comments?: string;
  /**
  * Credential type to identify the application that uses the credential
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community#credential_type GlobalCredentialSnmpv2WriteCommunity#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Name/Description of the credential
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community#description GlobalCredentialSnmpv2WriteCommunity#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community#id GlobalCredentialSnmpv2WriteCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community#instance_uuid GlobalCredentialSnmpv2WriteCommunity#instance_uuid}
  */
  readonly instanceUuid?: string;
  /**
  * SNMP write community
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community#write_community GlobalCredentialSnmpv2WriteCommunity#write_community}
  */
  readonly writeCommunity?: string;
}

export function globalCredentialSnmpv2WriteCommunityParametersToTerraform(struct?: GlobalCredentialSnmpv2WriteCommunityParametersOutputReference | GlobalCredentialSnmpv2WriteCommunityParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comments: cdktf.stringToTerraform(struct!.comments),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    instance_uuid: cdktf.stringToTerraform(struct!.instanceUuid),
    write_community: cdktf.stringToTerraform(struct!.writeCommunity),
  }
}


export function globalCredentialSnmpv2WriteCommunityParametersToHclTerraform(struct?: GlobalCredentialSnmpv2WriteCommunityParametersOutputReference | GlobalCredentialSnmpv2WriteCommunityParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_uuid: {
      value: cdktf.stringToHclTerraform(struct!.instanceUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_community: {
      value: cdktf.stringToHclTerraform(struct!.writeCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalCredentialSnmpv2WriteCommunityParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalCredentialSnmpv2WriteCommunityParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instanceUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceUuid = this._instanceUuid;
    }
    if (this._writeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeCommunity = this._writeCommunity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalCredentialSnmpv2WriteCommunityParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comments = undefined;
      this._credentialType = undefined;
      this._description = undefined;
      this._id = undefined;
      this._instanceUuid = undefined;
      this._writeCommunity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comments = value.comments;
      this._credentialType = value.credentialType;
      this._description = value.description;
      this._id = value.id;
      this._instanceUuid = value.instanceUuid;
      this._writeCommunity = value.writeCommunity;
    }
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // credential_type - computed: false, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
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

  // id - computed: false, optional: true, required: false
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

  // instance_uuid - computed: false, optional: true, required: false
  private _instanceUuid?: string; 
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }
  public set instanceUuid(value: string) {
    this._instanceUuid = value;
  }
  public resetInstanceUuid() {
    this._instanceUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUuidInput() {
    return this._instanceUuid;
  }

  // write_community - computed: false, optional: true, required: false
  private _writeCommunity?: string; 
  public get writeCommunity() {
    return this.getStringAttribute('write_community');
  }
  public set writeCommunity(value: string) {
    this._writeCommunity = value;
  }
  public resetWriteCommunity() {
    this._writeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeCommunityInput() {
    return this._writeCommunity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community dnacenter_global_credential_snmpv2_write_community}
*/
export class GlobalCredentialSnmpv2WriteCommunity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_global_credential_snmpv2_write_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalCredentialSnmpv2WriteCommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalCredentialSnmpv2WriteCommunity to import
  * @param importFromId The id of the existing GlobalCredentialSnmpv2WriteCommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalCredentialSnmpv2WriteCommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_global_credential_snmpv2_write_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/global_credential_snmpv2_write_community dnacenter_global_credential_snmpv2_write_community} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalCredentialSnmpv2WriteCommunityConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalCredentialSnmpv2WriteCommunityConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_global_credential_snmpv2_write_community',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new GlobalCredentialSnmpv2WriteCommunityItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new GlobalCredentialSnmpv2WriteCommunityParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: GlobalCredentialSnmpv2WriteCommunityParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: globalCredentialSnmpv2WriteCommunityParametersToTerraform(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: globalCredentialSnmpv2WriteCommunityParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalCredentialSnmpv2WriteCommunityParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
