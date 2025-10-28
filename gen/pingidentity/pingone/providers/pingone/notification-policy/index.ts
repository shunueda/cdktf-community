// https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single object to limit the countries where you can send SMS and voice notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#country_limit NotificationPolicy#country_limit}
  */
  readonly countryLimit?: NotificationPolicyCountryLimit;
  /**
  * The ID of the environment to associate the notification policy with.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#environment_id NotificationPolicy#environment_id}
  */
  readonly environmentId: string;
  /**
  * The name to use for the notification policy.  Must be unique among the notification policies in the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#name NotificationPolicy#name}
  */
  readonly name: string;
  /**
  * A set of objects that define the SMS/Voice limits.  A maximum of two quota objects can be defined, one for SMS and/or Voice quota, and one for Email quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#quota NotificationPolicy#quota}
  */
  readonly quota?: NotificationPolicyQuota[] | cdktf.IResolvable;
}
export interface NotificationPolicyCountryLimit {
  /**
  * The countries where the specified methods should be allowed or denied. Use two-letter country codes from ISO 3166-1.  Required when `type` is not `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#countries NotificationPolicy#countries}
  */
  readonly countries?: string[];
  /**
  * The delivery methods that the defined limitation should be applied to. Content of the array can be `SMS`, `Voice`, or both. If the parameter is not provided, the default is `SMS` and `Voice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#delivery_methods NotificationPolicy#delivery_methods}
  */
  readonly deliveryMethods?: string[];
  /**
  * A string that specifies the kind of limitation being defined.  Options are `ALLOWED` (allows notifications only for the countries specified in the `countries` parameter), `DENIED` (denies notifications only for the countries specified in the `countries` parameter), `NONE` (no limitation is defined).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#type NotificationPolicy#type}
  */
  readonly type: string;
}

export function notificationPolicyCountryLimitToTerraform(struct?: NotificationPolicyCountryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    delivery_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deliveryMethods),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function notificationPolicyCountryLimitToHclTerraform(struct?: NotificationPolicyCountryLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    delivery_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deliveryMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyCountryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPolicyCountryLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._deliveryMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMethods = this._deliveryMethods;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyCountryLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countries = undefined;
      this._deliveryMethods = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countries = value.countries;
      this._deliveryMethods = value.deliveryMethods;
      this._type = value.type;
    }
  }

  // countries - computed: true, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // delivery_methods - computed: true, optional: true, required: false
  private _deliveryMethods?: string[]; 
  public get deliveryMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_methods'));
  }
  public set deliveryMethods(value: string[]) {
    this._deliveryMethods = value;
  }
  public resetDeliveryMethods() {
    this._deliveryMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodsInput() {
    return this._deliveryMethods;
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface NotificationPolicyQuota {
  /**
  * The delivery methods for which the limit is being defined.  This limits defined in this block are configured as two groups, Voice/SMS, or Email.  Email cannot be configured with Voice and/or SMS limits.  Options are `Email` (configuration of Email limits but can not be set alongside `SMS` or `Voice`), `SMS` (configuration of SMS limits and can be set alongside `Voice`, but not `Email`), `Voice` (configuration of Voice limits and can be set alongside `SMS`, but not `Email`).  Defaults to `["SMS", "Voice"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#delivery_methods NotificationPolicy#delivery_methods}
  */
  readonly deliveryMethods?: string[];
  /**
  * The maximum number of notifications allowed per day.  Cannot be set with `used` and `unused`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#total NotificationPolicy#total}
  */
  readonly total?: number;
  /**
  * A string to specify whether the limit defined is per-user or per environment.  Options are `ENVIRONMENT`, `USER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#type NotificationPolicy#type}
  */
  readonly type: string;
  /**
  * The maximum number of notifications that can be received and not responded to each day. Must be configured with `used` and cannot be configured with `total`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#unused NotificationPolicy#unused}
  */
  readonly unused?: number;
  /**
  * The maximum number of notifications that can be received and responded to each day. Must be configured with `unused` and cannot be configured with `total`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#used NotificationPolicy#used}
  */
  readonly used?: number;
}

export function notificationPolicyQuotaToTerraform(struct?: NotificationPolicyQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deliveryMethods),
    total: cdktf.numberToTerraform(struct!.total),
    type: cdktf.stringToTerraform(struct!.type),
    unused: cdktf.numberToTerraform(struct!.unused),
    used: cdktf.numberToTerraform(struct!.used),
  }
}


export function notificationPolicyQuotaToHclTerraform(struct?: NotificationPolicyQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delivery_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deliveryMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unused: {
      value: cdktf.numberToHclTerraform(struct!.unused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    used: {
      value: cdktf.numberToHclTerraform(struct!.used),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPolicyQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPolicyQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryMethods = this._deliveryMethods;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unused !== undefined) {
      hasAnyValues = true;
      internalValueResult.unused = this._unused;
    }
    if (this._used !== undefined) {
      hasAnyValues = true;
      internalValueResult.used = this._used;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationPolicyQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deliveryMethods = undefined;
      this._total = undefined;
      this._type = undefined;
      this._unused = undefined;
      this._used = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deliveryMethods = value.deliveryMethods;
      this._total = value.total;
      this._type = value.type;
      this._unused = value.unused;
      this._used = value.used;
    }
  }

  // delivery_methods - computed: true, optional: true, required: false
  private _deliveryMethods?: string[]; 
  public get deliveryMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('delivery_methods'));
  }
  public set deliveryMethods(value: string[]) {
    this._deliveryMethods = value;
  }
  public resetDeliveryMethods() {
    this._deliveryMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryMethodsInput() {
    return this._deliveryMethods;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unused - computed: false, optional: true, required: false
  private _unused?: number; 
  public get unused() {
    return this.getNumberAttribute('unused');
  }
  public set unused(value: number) {
    this._unused = value;
  }
  public resetUnused() {
    this._unused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unusedInput() {
    return this._unused;
  }

  // used - computed: false, optional: true, required: false
  private _used?: number; 
  public get used() {
    return this.getNumberAttribute('used');
  }
  public set used(value: number) {
    this._used = value;
  }
  public resetUsed() {
    this._used = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedInput() {
    return this._used;
  }
}

export class NotificationPolicyQuotaList extends cdktf.ComplexList {
  public internalValue? : NotificationPolicyQuota[] | cdktf.IResolvable

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
  public get(index: number): NotificationPolicyQuotaOutputReference {
    return new NotificationPolicyQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy pingone_notification_policy}
*/
export class NotificationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_notification_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationPolicy to import
  * @param importFromId The id of the existing NotificationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_notification_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.13.0/docs/resources/notification_policy pingone_notification_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_notification_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._countryLimit.internalValue = config.countryLimit;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._quota.internalValue = config.quota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // country_limit - computed: true, optional: true, required: false
  private _countryLimit = new NotificationPolicyCountryLimitOutputReference(this, "country_limit");
  public get countryLimit() {
    return this._countryLimit;
  }
  public putCountryLimit(value: NotificationPolicyCountryLimit) {
    this._countryLimit.internalValue = value;
  }
  public resetCountryLimit() {
    this._countryLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryLimitInput() {
    return this._countryLimit.internalValue;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // quota - computed: false, optional: true, required: false
  private _quota = new NotificationPolicyQuotaList(this, "quota", true);
  public get quota() {
    return this._quota;
  }
  public putQuota(value: NotificationPolicyQuota[] | cdktf.IResolvable) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      country_limit: notificationPolicyCountryLimitToTerraform(this._countryLimit.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      quota: cdktf.listMapper(notificationPolicyQuotaToTerraform, false)(this._quota.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      country_limit: {
        value: notificationPolicyCountryLimitToHclTerraform(this._countryLimit.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationPolicyCountryLimit",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota: {
        value: cdktf.listMapperHcl(notificationPolicyQuotaToHclTerraform, false)(this._quota.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationPolicyQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
