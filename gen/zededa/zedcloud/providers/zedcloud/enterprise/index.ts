// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnterpriseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enterprise settings for API Token expiry to be set in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#api_token_expiry_in_seconds Enterprise#api_token_expiry_in_seconds}
  */
  readonly apiTokenExpiryInSeconds?: number;
  /**
  * enterprise level key-value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#attributes Enterprise#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Azure subscription ID tied to this enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#azure_sub_id Enterprise#azure_sub_id}
  */
  readonly azureSubId?: string;
  /**
  * zedcontrol host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#controller_host_url Enterprise#controller_host_url}
  */
  readonly controllerHostUrl?: string;
  /**
  * Detailed description of the enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#description Enterprise#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#hubspot_id Enterprise#hubspot_id}
  */
  readonly hubspotId?: string;
  /**
  * Perform authorization using parent enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#inherit_auth_from_parent Enterprise#inherit_auth_from_parent}
  */
  readonly inheritAuthFromParent?: boolean | cdktf.IResolvable;
  /**
  * User defined name of the enterprise. Once enterprise is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#name Enterprise#name}
  */
  readonly name: string;
  /**
  * Parent enterprise ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#parent_entp_id Enterprise#parent_entp_id}
  */
  readonly parentEntpId?: string;
  /**
  * List of realms associated with the enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#realms Enterprise#realms}
  */
  readonly realms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#sfdc_id Enterprise#sfdc_id}
  */
  readonly sfdcId?: string;
  /**
  * Enterprise state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#state Enterprise#state}
  */
  readonly state?: string;
  /**
  * User defined title for the enterprise. Title can be changed any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#title Enterprise#title}
  */
  readonly title: string;
  /**
  * Enterprise type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#type Enterprise#type}
  */
  readonly type?: string;
  /**
  * child_enterprises block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#child_enterprises Enterprise#child_enterprises}
  */
  readonly childEnterprises?: EnterpriseChildEnterprises[] | cdktf.IResolvable;
  /**
  * policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#policy_list Enterprise#policy_list}
  */
  readonly policyList?: EnterprisePolicyListStruct[] | cdktf.IResolvable;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#revision Enterprise#revision}
  */
  readonly revision?: EnterpriseRevision[] | cdktf.IResolvable;
  /**
  * stream_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#stream_events Enterprise#stream_events}
  */
  readonly streamEvents?: EnterpriseStreamEvents[] | cdktf.IResolvable;
  /**
  * totp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#totp_settings Enterprise#totp_settings}
  */
  readonly totpSettings?: EnterpriseTotpSettings[] | cdktf.IResolvable;
}
export interface EnterpriseChildEnterprises {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#name Enterprise#name}
  */
  readonly name?: string;
}

export function enterpriseChildEnterprisesToTerraform(struct?: EnterpriseChildEnterprises | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function enterpriseChildEnterprisesToHclTerraform(struct?: EnterpriseChildEnterprises | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseChildEnterprisesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EnterpriseChildEnterprises | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseChildEnterprises | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class EnterpriseChildEnterprisesList extends cdktf.ComplexList {
  public internalValue? : EnterpriseChildEnterprises[] | cdktf.IResolvable

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
  public get(index: number): EnterpriseChildEnterprisesOutputReference {
    return new EnterpriseChildEnterprisesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnterprisePolicyListListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#accepted_at Enterprise#accepted_at}
  */
  readonly acceptedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#accepted_by Enterprise#accepted_by}
  */
  readonly acceptedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#effective_from Enterprise#effective_from}
  */
  readonly effectiveFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#policy Enterprise#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#version Enterprise#version}
  */
  readonly version?: string;
}

export function enterprisePolicyListListStructToTerraform(struct?: EnterprisePolicyListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepted_at: cdktf.stringToTerraform(struct!.acceptedAt),
    accepted_by: cdktf.stringToTerraform(struct!.acceptedBy),
    effective_from: cdktf.stringToTerraform(struct!.effectiveFrom),
    policy: cdktf.stringToTerraform(struct!.policy),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function enterprisePolicyListListStructToHclTerraform(struct?: EnterprisePolicyListListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accepted_at: {
      value: cdktf.stringToHclTerraform(struct!.acceptedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accepted_by: {
      value: cdktf.stringToHclTerraform(struct!.acceptedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_from: {
      value: cdktf.stringToHclTerraform(struct!.effectiveFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterprisePolicyListListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EnterprisePolicyListListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptedAt = this._acceptedAt;
    }
    if (this._acceptedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptedBy = this._acceptedBy;
    }
    if (this._effectiveFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveFrom = this._effectiveFrom;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterprisePolicyListListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptedAt = undefined;
      this._acceptedBy = undefined;
      this._effectiveFrom = undefined;
      this._policy = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptedAt = value.acceptedAt;
      this._acceptedBy = value.acceptedBy;
      this._effectiveFrom = value.effectiveFrom;
      this._policy = value.policy;
      this._version = value.version;
    }
  }

  // accepted_at - computed: false, optional: true, required: false
  private _acceptedAt?: string; 
  public get acceptedAt() {
    return this.getStringAttribute('accepted_at');
  }
  public set acceptedAt(value: string) {
    this._acceptedAt = value;
  }
  public resetAcceptedAt() {
    this._acceptedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedAtInput() {
    return this._acceptedAt;
  }

  // accepted_by - computed: false, optional: true, required: false
  private _acceptedBy?: string; 
  public get acceptedBy() {
    return this.getStringAttribute('accepted_by');
  }
  public set acceptedBy(value: string) {
    this._acceptedBy = value;
  }
  public resetAcceptedBy() {
    this._acceptedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedByInput() {
    return this._acceptedBy;
  }

  // effective_from - computed: false, optional: true, required: false
  private _effectiveFrom?: string; 
  public get effectiveFrom() {
    return this.getStringAttribute('effective_from');
  }
  public set effectiveFrom(value: string) {
    this._effectiveFrom = value;
  }
  public resetEffectiveFrom() {
    this._effectiveFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveFromInput() {
    return this._effectiveFrom;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class EnterprisePolicyListListStructList extends cdktf.ComplexList {
  public internalValue? : EnterprisePolicyListListStruct[] | cdktf.IResolvable

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
  public get(index: number): EnterprisePolicyListListStructOutputReference {
    return new EnterprisePolicyListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnterprisePolicyListStruct {
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#list Enterprise#list}
  */
  readonly list?: EnterprisePolicyListListStruct[] | cdktf.IResolvable;
}

export function enterprisePolicyListStructToTerraform(struct?: EnterprisePolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list: cdktf.listMapper(enterprisePolicyListListStructToTerraform, true)(struct!.list),
  }
}


export function enterprisePolicyListStructToHclTerraform(struct?: EnterprisePolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list: {
      value: cdktf.listMapperHcl(enterprisePolicyListListStructToHclTerraform, true)(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "EnterprisePolicyListListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterprisePolicyListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EnterprisePolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterprisePolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._list.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._list.internalValue = value.list;
    }
  }

  // list - computed: false, optional: true, required: false
  private _list = new EnterprisePolicyListListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: EnterprisePolicyListListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }
}

export class EnterprisePolicyListStructList extends cdktf.ComplexList {
  public internalValue? : EnterprisePolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): EnterprisePolicyListStructOutputReference {
    return new EnterprisePolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnterpriseRevision {
}

export function enterpriseRevisionToTerraform(struct?: EnterpriseRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function enterpriseRevisionToHclTerraform(struct?: EnterpriseRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EnterpriseRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EnterpriseRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class EnterpriseRevisionList extends cdktf.ComplexList {
  public internalValue? : EnterpriseRevision[] | cdktf.IResolvable

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
  public get(index: number): EnterpriseRevisionOutputReference {
    return new EnterpriseRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnterpriseStreamEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#enabled Enterprise#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#plugin_id Enterprise#plugin_id}
  */
  readonly pluginId?: string;
}

export function enterpriseStreamEventsToTerraform(struct?: EnterpriseStreamEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    plugin_id: cdktf.stringToTerraform(struct!.pluginId),
  }
}


export function enterpriseStreamEventsToHclTerraform(struct?: EnterpriseStreamEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plugin_id: {
      value: cdktf.stringToHclTerraform(struct!.pluginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseStreamEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EnterpriseStreamEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._pluginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginId = this._pluginId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseStreamEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._pluginId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._pluginId = value.pluginId;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // plugin_id - computed: false, optional: true, required: false
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  public resetPluginId() {
    this._pluginId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
  }
}

export class EnterpriseStreamEventsList extends cdktf.ComplexList {
  public internalValue? : EnterpriseStreamEvents[] | cdktf.IResolvable

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
  public get(index: number): EnterpriseStreamEventsOutputReference {
    return new EnterpriseStreamEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnterpriseTotpSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#enforce Enterprise#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#enforce_in_children Enterprise#enforce_in_children}
  */
  readonly enforceInChildren?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#enforced_by_parent Enterprise#enforced_by_parent}
  */
  readonly enforcedByParent?: boolean | cdktf.IResolvable;
}

export function enterpriseTotpSettingsToTerraform(struct?: EnterpriseTotpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    enforce_in_children: cdktf.booleanToTerraform(struct!.enforceInChildren),
    enforced_by_parent: cdktf.booleanToTerraform(struct!.enforcedByParent),
  }
}


export function enterpriseTotpSettingsToHclTerraform(struct?: EnterpriseTotpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_in_children: {
      value: cdktf.booleanToHclTerraform(struct!.enforceInChildren),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforced_by_parent: {
      value: cdktf.booleanToHclTerraform(struct!.enforcedByParent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnterpriseTotpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EnterpriseTotpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._enforceInChildren !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceInChildren = this._enforceInChildren;
    }
    if (this._enforcedByParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedByParent = this._enforcedByParent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnterpriseTotpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enforce = undefined;
      this._enforceInChildren = undefined;
      this._enforcedByParent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enforce = value.enforce;
      this._enforceInChildren = value.enforceInChildren;
      this._enforcedByParent = value.enforcedByParent;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // enforce_in_children - computed: false, optional: true, required: false
  private _enforceInChildren?: boolean | cdktf.IResolvable; 
  public get enforceInChildren() {
    return this.getBooleanAttribute('enforce_in_children');
  }
  public set enforceInChildren(value: boolean | cdktf.IResolvable) {
    this._enforceInChildren = value;
  }
  public resetEnforceInChildren() {
    this._enforceInChildren = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInChildrenInput() {
    return this._enforceInChildren;
  }

  // enforced_by_parent - computed: false, optional: true, required: false
  private _enforcedByParent?: boolean | cdktf.IResolvable; 
  public get enforcedByParent() {
    return this.getBooleanAttribute('enforced_by_parent');
  }
  public set enforcedByParent(value: boolean | cdktf.IResolvable) {
    this._enforcedByParent = value;
  }
  public resetEnforcedByParent() {
    this._enforcedByParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedByParentInput() {
    return this._enforcedByParent;
  }
}

export class EnterpriseTotpSettingsList extends cdktf.ComplexList {
  public internalValue? : EnterpriseTotpSettings[] | cdktf.IResolvable

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
  public get(index: number): EnterpriseTotpSettingsOutputReference {
    return new EnterpriseTotpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise zedcloud_enterprise}
*/
export class Enterprise extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_enterprise";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Enterprise resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Enterprise to import
  * @param importFromId The id of the existing Enterprise that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Enterprise to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_enterprise", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/enterprise zedcloud_enterprise} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnterpriseConfig
  */
  public constructor(scope: Construct, id: string, config: EnterpriseConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_enterprise',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiTokenExpiryInSeconds = config.apiTokenExpiryInSeconds;
    this._attributes = config.attributes;
    this._azureSubId = config.azureSubId;
    this._controllerHostUrl = config.controllerHostUrl;
    this._description = config.description;
    this._hubspotId = config.hubspotId;
    this._inheritAuthFromParent = config.inheritAuthFromParent;
    this._name = config.name;
    this._parentEntpId = config.parentEntpId;
    this._realms = config.realms;
    this._sfdcId = config.sfdcId;
    this._state = config.state;
    this._title = config.title;
    this._type = config.type;
    this._childEnterprises.internalValue = config.childEnterprises;
    this._policyList.internalValue = config.policyList;
    this._revision.internalValue = config.revision;
    this._streamEvents.internalValue = config.streamEvents;
    this._totpSettings.internalValue = config.totpSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token_expiry_in_seconds - computed: false, optional: true, required: false
  private _apiTokenExpiryInSeconds?: number; 
  public get apiTokenExpiryInSeconds() {
    return this.getNumberAttribute('api_token_expiry_in_seconds');
  }
  public set apiTokenExpiryInSeconds(value: number) {
    this._apiTokenExpiryInSeconds = value;
  }
  public resetApiTokenExpiryInSeconds() {
    this._apiTokenExpiryInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenExpiryInSecondsInput() {
    return this._apiTokenExpiryInSeconds;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // azure_sub_id - computed: false, optional: true, required: false
  private _azureSubId?: string; 
  public get azureSubId() {
    return this.getStringAttribute('azure_sub_id');
  }
  public set azureSubId(value: string) {
    this._azureSubId = value;
  }
  public resetAzureSubId() {
    this._azureSubId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubIdInput() {
    return this._azureSubId;
  }

  // controller_host_url - computed: false, optional: true, required: false
  private _controllerHostUrl?: string; 
  public get controllerHostUrl() {
    return this.getStringAttribute('controller_host_url');
  }
  public set controllerHostUrl(value: string) {
    this._controllerHostUrl = value;
  }
  public resetControllerHostUrl() {
    this._controllerHostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerHostUrlInput() {
    return this._controllerHostUrl;
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

  // hubspot_id - computed: false, optional: true, required: false
  private _hubspotId?: string; 
  public get hubspotId() {
    return this.getStringAttribute('hubspot_id');
  }
  public set hubspotId(value: string) {
    this._hubspotId = value;
  }
  public resetHubspotId() {
    this._hubspotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubspotIdInput() {
    return this._hubspotId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherit_auth_from_parent - computed: false, optional: true, required: false
  private _inheritAuthFromParent?: boolean | cdktf.IResolvable; 
  public get inheritAuthFromParent() {
    return this.getBooleanAttribute('inherit_auth_from_parent');
  }
  public set inheritAuthFromParent(value: boolean | cdktf.IResolvable) {
    this._inheritAuthFromParent = value;
  }
  public resetInheritAuthFromParent() {
    this._inheritAuthFromParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritAuthFromParentInput() {
    return this._inheritAuthFromParent;
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

  // parent_entp_id - computed: false, optional: true, required: false
  private _parentEntpId?: string; 
  public get parentEntpId() {
    return this.getStringAttribute('parent_entp_id');
  }
  public set parentEntpId(value: string) {
    this._parentEntpId = value;
  }
  public resetParentEntpId() {
    this._parentEntpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentEntpIdInput() {
    return this._parentEntpId;
  }

  // realms - computed: false, optional: true, required: false
  private _realms?: string[]; 
  public get realms() {
    return this.getListAttribute('realms');
  }
  public set realms(value: string[]) {
    this._realms = value;
  }
  public resetRealms() {
    this._realms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmsInput() {
    return this._realms;
  }

  // sfdc_id - computed: false, optional: true, required: false
  private _sfdcId?: string; 
  public get sfdcId() {
    return this.getStringAttribute('sfdc_id');
  }
  public set sfdcId(value: string) {
    this._sfdcId = value;
  }
  public resetSfdcId() {
    this._sfdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfdcIdInput() {
    return this._sfdcId;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // child_enterprises - computed: false, optional: true, required: false
  private _childEnterprises = new EnterpriseChildEnterprisesList(this, "child_enterprises", false);
  public get childEnterprises() {
    return this._childEnterprises;
  }
  public putChildEnterprises(value: EnterpriseChildEnterprises[] | cdktf.IResolvable) {
    this._childEnterprises.internalValue = value;
  }
  public resetChildEnterprises() {
    this._childEnterprises.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childEnterprisesInput() {
    return this._childEnterprises.internalValue;
  }

  // policy_list - computed: false, optional: true, required: false
  private _policyList = new EnterprisePolicyListStructList(this, "policy_list", false);
  public get policyList() {
    return this._policyList;
  }
  public putPolicyList(value: EnterprisePolicyListStruct[] | cdktf.IResolvable) {
    this._policyList.internalValue = value;
  }
  public resetPolicyList() {
    this._policyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyListInput() {
    return this._policyList.internalValue;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new EnterpriseRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: EnterpriseRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }

  // stream_events - computed: false, optional: true, required: false
  private _streamEvents = new EnterpriseStreamEventsList(this, "stream_events", false);
  public get streamEvents() {
    return this._streamEvents;
  }
  public putStreamEvents(value: EnterpriseStreamEvents[] | cdktf.IResolvable) {
    this._streamEvents.internalValue = value;
  }
  public resetStreamEvents() {
    this._streamEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamEventsInput() {
    return this._streamEvents.internalValue;
  }

  // totp_settings - computed: false, optional: true, required: false
  private _totpSettings = new EnterpriseTotpSettingsList(this, "totp_settings", false);
  public get totpSettings() {
    return this._totpSettings;
  }
  public putTotpSettings(value: EnterpriseTotpSettings[] | cdktf.IResolvable) {
    this._totpSettings.internalValue = value;
  }
  public resetTotpSettings() {
    this._totpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpSettingsInput() {
    return this._totpSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token_expiry_in_seconds: cdktf.numberToTerraform(this._apiTokenExpiryInSeconds),
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      azure_sub_id: cdktf.stringToTerraform(this._azureSubId),
      controller_host_url: cdktf.stringToTerraform(this._controllerHostUrl),
      description: cdktf.stringToTerraform(this._description),
      hubspot_id: cdktf.stringToTerraform(this._hubspotId),
      inherit_auth_from_parent: cdktf.booleanToTerraform(this._inheritAuthFromParent),
      name: cdktf.stringToTerraform(this._name),
      parent_entp_id: cdktf.stringToTerraform(this._parentEntpId),
      realms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._realms),
      sfdc_id: cdktf.stringToTerraform(this._sfdcId),
      state: cdktf.stringToTerraform(this._state),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      child_enterprises: cdktf.listMapper(enterpriseChildEnterprisesToTerraform, true)(this._childEnterprises.internalValue),
      policy_list: cdktf.listMapper(enterprisePolicyListStructToTerraform, true)(this._policyList.internalValue),
      revision: cdktf.listMapper(enterpriseRevisionToTerraform, true)(this._revision.internalValue),
      stream_events: cdktf.listMapper(enterpriseStreamEventsToTerraform, true)(this._streamEvents.internalValue),
      totp_settings: cdktf.listMapper(enterpriseTotpSettingsToTerraform, true)(this._totpSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token_expiry_in_seconds: {
        value: cdktf.numberToHclTerraform(this._apiTokenExpiryInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      azure_sub_id: {
        value: cdktf.stringToHclTerraform(this._azureSubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_host_url: {
        value: cdktf.stringToHclTerraform(this._controllerHostUrl),
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
      hubspot_id: {
        value: cdktf.stringToHclTerraform(this._hubspotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inherit_auth_from_parent: {
        value: cdktf.booleanToHclTerraform(this._inheritAuthFromParent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_entp_id: {
        value: cdktf.stringToHclTerraform(this._parentEntpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._realms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sfdc_id: {
        value: cdktf.stringToHclTerraform(this._sfdcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_enterprises: {
        value: cdktf.listMapperHcl(enterpriseChildEnterprisesToHclTerraform, true)(this._childEnterprises.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseChildEnterprisesList",
      },
      policy_list: {
        value: cdktf.listMapperHcl(enterprisePolicyListStructToHclTerraform, true)(this._policyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterprisePolicyListStructList",
      },
      revision: {
        value: cdktf.listMapperHcl(enterpriseRevisionToHclTerraform, true)(this._revision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseRevisionList",
      },
      stream_events: {
        value: cdktf.listMapperHcl(enterpriseStreamEventsToHclTerraform, true)(this._streamEvents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseStreamEventsList",
      },
      totp_settings: {
        value: cdktf.listMapperHcl(enterpriseTotpSettingsToHclTerraform, true)(this._totpSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnterpriseTotpSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
